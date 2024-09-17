
import { Component, OnInit } from '@angular/core';
import { OIDCService } from '~/app/shared/services/sso-oidc.service';
import { RpcService } from '~/app/shared/services/rpc.service';
import { BlockUiService } from '~/app/shared/services/block-ui.service';
import { AuthService } from '~/app/shared/services/auth.service';
import { translate } from '~/app/i18n.helper';
// import { ActivatedRoute, Router } from '@angular/router';
import { marker as gettext } from '@ngneat/transloco-keys-manager/marker';
import * as _ from 'lodash';
import { catchError, finalize, throwError } from 'rxjs';
import { AuthSessionService } from '~/app/shared/services/auth-session.service';
@Component({
  selector: 'oidc-callback',
  templateUrl: './oidc-callback.component.html',
})
export class CallbackComponent implements OnInit {
  code: string;
  state: string;
  constructor(
    private sso: OIDCService,
    private rpc: RpcService,
    private blockUiService: BlockUiService,
    private authService: AuthService,
    // private activatedRoute: ActivatedRoute,
    // private router: Router,
    private authSessionService: AuthSessionService) { }

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
        this.handleUserResponse(JSON.parse(user))
      });
  }
  makeRandom(lengthOfCode: number, possible: string) {
    let text = "";
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
  handleUserResponse(user: any) {
    debugger;


    this.blockUiService.start(translate(gettext('Check For Exist User ...')));
    this.authService
      .login('admin', 'Smartyourlife123@*')
      .subscribe(() => {
        this.rpc.request('UserMgmt', 'getUser', {
          "name": user.user.username,
        }).pipe(
          finalize(() => {
            this.blockUiService.update(translate(gettext('User exist...')));
          }),
          catchError(error => {
            console.error("User not found:", error);
            // Handle the error appropriately
            return throwError(() => new Error('User not found'));
          })
        ).subscribe({
          next: res => {
            this.SetNewPassAndLogin(res)
          },
          error: err => {
            console.error("Error checking existing user:", err);
            // If user doesn't exist, create new user and login
            this.createNewUserAndLogin(user);
          }
        })

      });

  }
  createNewUserAndLogin(user: any) {
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    var pass = this.makeRandom(12, possible);
    let possibleNumber = "1234567890"
    this.rpc
      .request('UserMgmt', 'setUser', {
        "name": user.user.username,
        "uid": parseInt(this.makeRandom(5, possibleNumber)),
        "groups":
          ["adm",
            "_ssh", "nogroup", "openmediavault-admin",
            "openmediavault-config", "openmediavault-engined",
            "openmediavault-webgui", "openmediavault-notify", "users",
            "www-data"],
        "shell": "/bin/bash",
        "email": user.user.email,
        "password": pass,
        "comment": "Authentik OIDC",
        "disallowusermod": false,
        "sshpubkeys": []
      })
      .pipe(finalize(() => {
        this.blockUiService.update(translate(gettext('Creating new User')));
      })).subscribe(() => {
        this.rpc
          .requestTask(
            'Config',
            'applyChangesBg',
            {
              modules: [],
              force: false
            },
            undefined,
            1000,
          ).subscribe(() => {
            this.rpc.request('Session', 'logout').subscribe((() => {
              this.authSessionService.revoke();
              this.LoginUser(user.user.username, pass)
            }))
          });
      }
      )
  }
  SetNewPassAndLogin(res: any) {
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    var pass = this.makeRandom(12, possible);
    this.rpc
      .request('UserMgmt', 'setUser', {
        "name": res.name,
        "uid": res.uid,
        "groups": res.groups,
        "shell": res.shell,
        "email": res.email,
        "password": pass,
        "comment": `Authentik OIDC`,
        "disallowusermod": res.disallowusermod,
        "sshpubkeys": res.sshpubkeys
      }).pipe(finalize(() => {
        this.blockUiService.update(translate(gettext('Update User Info...')));
      }),)
      .subscribe(() => {
        this.rpc
          .requestTask(
            'Config',
            'applyChangesBg',
            {
              modules: [],
              force: false
            },
            undefined,
            1000,
          ).subscribe(() => {
            this.rpc.request('Session', 'logout').subscribe((() => {
              this.authSessionService.revoke();
              this.LoginUser(res.name, pass)
            }))
          });
      }
      )
  }
  LoginUser(username, pass) {
    this.authService.login(username, pass)
      .pipe(finalize(() => {
        this.blockUiService.update(translate(gettext('Complete')));
        this.blockUiService.stop();
      }),)
      .subscribe(() => {
        debugger;
        // const url = _.get(this.activatedRoute.snapshot.queryParams, 'returnUrl', '/dashboard');
        // this.router.navigate([url]);
        window.location.href = window.location.origin
      });
  }
}
