import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    AuthModule.forRoot({
      config: {
        authority: 'http://accessmanager.local',
        clientId: 'hw66OpShp9ONfzNN6rqM5wzSEhhLFwkxrIk8dfL4',
        authWellknownEndpoints: {
          jwksUri: 'http://accessmanager.local/application/o/openmediavault/jwks/',
          issuer: 'http://accessmanager.local/application/o/openmediavault/',
          authorizationEndpoint: 'http://accessmanager.local/application/o/authorize/',
          tokenEndpoint: 'http://accessmanager.local/application/o/token/',
          userInfoEndpoint: 'http://accessmanager.local/application/o/userinfo/',
          endSessionEndpoint: 'http://accessmanager.local/application/o/openmediavault/end-session/',
          revocationEndpoint: 'http://accessmanager.local/application/o/revoke/',
          introspectionEndpoint: 'http://accessmanager.local/application/o/introspect/',
        },
        disablePkce: true,
        configId: '12',
        autoUserInfo: true,
        redirectUrl: window.location.origin + "/#/callback",
        scope: 'openid profile email offline_access goauthentik.io/api',
        responseType: 'code',
        logLevel: environment.production ? LogLevel.None : LogLevel.Debug,
      },
    }),
  ],
  exports: [AuthModule],
})
export class AuthConfigModule { }
