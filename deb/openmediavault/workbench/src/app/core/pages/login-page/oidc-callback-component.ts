
import { Component, OnInit } from '@angular/core';
import { OIDCService } from '~/app/shared/services/sso-oidc.service';
// import { RpcService } from '~/app/shared/services/rpc.service';
import { BlockUiService } from '~/app/shared/services/block-ui.service';
import { AuthService } from '~/app/shared/services/auth.service';
import { translate } from '~/app/i18n.helper';
import { ActivatedRoute, Router } from '@angular/router';
import { marker as gettext } from '@ngneat/transloco-keys-manager/marker';
import * as _ from 'lodash';
import { finalize } from 'rxjs';
@Component({
  selector: 'oidc-callback',
  templateUrl: './oidc-callback.component.html',
})
export class CallbackComponent implements OnInit {
  code: string;
  state: string;
  constructor(
    private sso: OIDCService,
    // private rpc: RpcService,
    private blockUiService: BlockUiService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router,) { }

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
    this.blockUiService.start(translate(gettext('Please wait ...')));
    this.authService
      .login('nextzen', 'Smartyourlife123@*')
      .pipe(
        finalize(() => {
          this.blockUiService.stop();
        })
      )
      .subscribe(() => {
        const url = _.get(this.activatedRoute.snapshot.queryParams, 'returnUrl', '/dashboard');
        this.router.navigate([url]);
      });
  }
}
