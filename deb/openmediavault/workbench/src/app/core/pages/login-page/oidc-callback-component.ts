
import { Component, OnInit } from '@angular/core';
import { OIDCService } from '~/app/shared/services/sso-oidc.service';
import { RpcService } from '~/app/shared/services/rpc.service';
@Component({
  selector: 'oidc-callback',
  templateUrl: './oidc-callback.component.html',
})
export class CallbackComponent implements OnInit {
  code: string;
  state: string;
  constructor(private sso: OIDCService, private rpc: RpcService) { }

  ngOnInit() {
    const fullUrl = window.location.href;
    // Create a URL object
    const urlObj = new URL(fullUrl);
    // Extract query parameters
    const params = new URLSearchParams(urlObj.search);
    // Get the code and state values
    const code = params.get('code');
    const state = params.get('state');
    this.sso.exchangeCodeForToken(code, state, '12').subscribe(
      response => {
        this.handleTokenResponse(response)
      }
    )
  }
  handleTokenResponse(response: any) {
    // Store the token securely
    localStorage.setItem('access_token', response.access_token);
    localStorage.setItem('expire', response.expires_in);
    localStorage.setItem('refresh_token', response.refresh_token);
    // Move the subscription outside of the method

    this.sso.getUserInfo(response.access_token).subscribe(
      user => {
        console.log('User Data:', user);

      });
      this.handleUserResponse(response)
  }

  handleUserResponse(response: any) {
    debugger;
    this.rpc.request(
      'session',
      'login',
      {
        "username": "nextzen",
        "password": "Smartyourlife123@*"
      }
    ).subscribe({
      next: (existUser) => {
        console.log('existUser:', existUser);
        // Handle the user data here
        // For example, update the component's view model
      },
      error: (error) => {
        console.error('Error getting user:', error);
        // Handle any errors
      },
      complete: () => {
        console.log('Request completed');
        // Optionally, handle when the observable completes
      }
    });
  }
}
