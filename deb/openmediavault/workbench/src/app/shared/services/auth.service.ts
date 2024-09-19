/**
 * This file is part of OpenMediaVault.
 *
 * @license   http://www.gnu.org/licenses/gpl.html GPL Version 3
 * @author    Volker Theile <volker.theile@openmediavault.org>
 * @copyright Copyright (c) 2009-2024 Volker Theile
 *
 * OpenMediaVault is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 *
 * OpenMediaVault is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 */
import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

import { AuthSessionService } from '~/app/shared/services/auth-session.service';
import { RpcService } from '~/app/shared/services/rpc.service';

export type SessionData = {
  authenticated: boolean;
  permissions: { [key: string]: any };
  username: string;
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private authSessionService: AuthSessionService, private rpcService: RpcService) { }

  login(username: string, password: string, loginMethod?: string): Observable<SessionData> {
    debugger;
    return this.rpcService
      .request('Session', 'login', {
        username,
        password
      })
      .pipe(
        tap((res: any) => {
          console.log('Session Login', res);// Get all Set-Cookie headers
          // Process the cookies as needed (e.g., store them in a service or local storage)
          this.authSessionService.set(res.username, res.permissions, loginMethod);
        })
      );
  }

  logout(): Observable<void> {
    // Always logout in case of success AND failure.
    return this.rpcService.request('Session', 'logout').pipe(
      finalize(() => {
        // Revoke session and reload the page. The Angular router and
        // auth-guard service will redirect automatically to the login
        // page.
        this.authSessionService.revoke();
        document.location.replace('');
      })
    );
  }

  isLoggedIn(): boolean {
    if (this.authSessionService.getLoginMethod() === 'local') {
      return !_.isNull(this.authSessionService.getUsername());
    }
    return !_.isNull(this.authSessionService.isInvalidateSession());
  }
}
