import { Component, inject, OnInit } from "@angular/core";
import { OidcSecurityService } from 'angular-auth-oidc-client';
@Component({ templateUrl: './login-external.component.html' })
export class OIDC implements OnInit {
  private readonly oidcSecurityService = inject(OidcSecurityService);
  userData$ = this.oidcSecurityService.userData$;
  configuration$ = this.oidcSecurityService.getConfiguration();

  isAuthenticated = false;
  async ngOnInit(): Promise<void> {
    debugger
    try {
      this.oidcSecurityService.isAuthenticated$.subscribe(
        ({ isAuthenticated }) => {
          this.isAuthenticated = isAuthenticated;

          console.info('authenticated: ', isAuthenticated);
        }
      );

      this.oidcSecurityService.authorize()

    } catch (error) {
      console.error('OIDC initialization error:', error);
    }

  }
}
