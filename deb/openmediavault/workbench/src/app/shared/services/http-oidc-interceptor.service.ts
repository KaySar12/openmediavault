import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, switchMap, tap, throwError } from "rxjs";
import { OIDCService } from "./sso-oidc.service";
import { RpcService } from "./rpc.service";
import { AuthSessionService } from "./auth-session.service";
import { OidcSecurityService } from "angular-auth-oidc-client";

@Injectable({
  providedIn: 'root'
})
export class HttpOIDCInterceptorService implements HttpInterceptor {
  private lastTokenValidationTime: Date;
  constructor(private oidcService: OIDCService, private rpc: RpcService, private authSessionService: AuthSessionService, private oidcSecurity: OidcSecurityService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const loginMethod = sessionStorage.getItem('login-method');

    if (loginMethod === 'oauth2') {
      console.log('Intercepting request:', request.url);

      // Check if token validation is due
      const currentTime = new Date();
      if (!this.lastTokenValidationTime ||
        currentTime.getTime() - this.lastTokenValidationTime.getTime() > 10000) {
        // Token validation is due, trigger immediate validation
        this.lastTokenValidationTime = currentTime;
        return this.validateToken(request, next);
      } else {
        // Token validation is not due yet, proceed with the request
        return next.handle(request).pipe(
          tap(event => {
            if (event.type === HttpEventType.Response) {
              console.log('Response received:', event.url);
            }
          })
        );
      }
    }

    // If loginMethod is not 'oauth2', just pass through
    return next.handle(request);
  }

  private validateToken(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.oidcService.validateToken(localStorage.getItem('refresh_token'), '12').pipe(
      switchMap(validationResult => {
        if (validationResult.active) {
          console.log('Valid Token Carry on');
          this.lastTokenValidationTime = new Date();
          return next.handle(request).pipe(
            tap(event => {
              if (event.type === HttpEventType.Response) {
                console.log('Response received:', event.url);
              }
            })
          );
        } else {
          console.log('Invalid token detected. Revoking access...');
          this.rpc.request('Session', 'logout').subscribe(() => {
            this.authSessionService.revoke()
            this.oidcSecurity.logoff('12')
          }
          )
          return throwError(() => new Error('Invalid token'));
        }
      }),
      catchError(error => {
        console.error('Error during token validation:', error);

        return throwError(() => new Error('Token validation failed'));
      })
    );
  }
}
