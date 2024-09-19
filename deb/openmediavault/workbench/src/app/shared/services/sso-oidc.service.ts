import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { catchError, map, Observable, switchMap, tap, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OIDCService {
  private readonly oidcSecurityService = inject(OidcSecurityService);
  constructor(private http: HttpClient) { }
  getUserInfo(accessToken: string): Observable<any> {

    return this.http.get(`./api/v3/core/users/me/`, {
      responseType: 'text',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json'
      }
    }).pipe(
      catchError((error) => {
        error.preventDefault?.();
        return error
      }),
      tap((response: string) => {

        try {
          const userResponse = JSON.parse(response);
          return userResponse;
        } catch (error) {
          console.error('Error parsing token response:', error);
        }
      })
    );
  }
  validateToken(token: string, configId: string): Observable<any> {
    debugger;
    return this.oidcSecurityService.getConfiguration(configId).pipe(
      switchMap(config => {
        if (!config || !config.clientId) {
          throw new Error('Invalid OIDC configuration');
        }
        const body = new URLSearchParams({
          token: token
        });

        return this.http.post(config.authWellknownEndpoints.introspectionEndpoint,
          body.toString(), {
          responseType: 'text',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(config.clientId + ':' + config.customParamsAuthRequest?.client_secret.toString())
          }
        }).pipe(map((response: string) => {
          try {
            return JSON.parse(response);
          } catch (error) {
            throw new Error('Token parsing failed');
          }
        }))
      })
    )
  }
  exchangeCodeForToken(code: string, state: string, configId: string): Observable<any> {

    return this.oidcSecurityService.getConfiguration(configId).pipe(
      switchMap(config => {
        if (!config || !config.clientId) {
          throw new Error('Invalid OIDC configuration. Client ID is missing.');
        }
        const body = new URLSearchParams({
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: config.redirectUrl,
          client_id: config.clientId,  // Access clientId from the config
          client_secret: config.customParamsAuthRequest?.client_secret.toString(),
          state: state
        });

        // Perform the token exchange
        return this.http.post(config.authWellknownEndpoints.tokenEndpoint, body.toString(), {
          responseType: 'text',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).pipe(
          map((response: string) => {
            try {
              // Parse and return the token response
              return JSON.parse(response);
            } catch (error) {
              console.error('Error parsing token response:', error);
              throw new Error('Token parsing failed');
            }
          })
        );
      }),
      catchError(error => {
        console.error('Error exchanging code for token:', error);
        return throwError(() => new Error('Token exchange failed'));
      })
    );
  }
  renewAccessToken(refresh_token: string, configId: string): Observable<any> {
    return this.oidcSecurityService.getConfiguration(configId).pipe(
      switchMap(config => {
        if (!config || !config.clientId) {
          throw new Error('Invalid OIDC configuration. Client ID is missing.');
        }
        const body = new URLSearchParams({
          grant_type: 'refresh_token',
          refresh_token: refresh_token,
          client_id: config.clientId,
          client_secret: config.customParamsAuthRequest?.client_secret.toString(),
        });
        // Perform the token exchange
        return this.http.post(config.authWellknownEndpoints.tokenEndpoint, body.toString(), {
          responseType: 'text',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).pipe(
          map((response: string) => {
            try {
              // Parse and return the token response
              return JSON.parse(response);
            } catch (error) {
              console.error('Error parsing token response:', error);
              throw new Error('Token parsing failed');
            }
          })
        );
      }),
      catchError(error => {
        console.error('Error exchanging code for token:', error);
        return throwError(() => new Error('Token exchange failed'));
      })
    );
  }
}
