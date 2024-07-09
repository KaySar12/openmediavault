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
import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';

import {
  PrefersColorScheme,
  PrefersColorSchemeService
} from '~/app/shared/services/prefers-color-scheme.service';

@Component({
  selector: 'omv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  private messageHandler: any;
  constructor(
    private prefersColorSchemeService: PrefersColorSchemeService,
    private renderer2: Renderer2
  ) {

  }
  ngOnInit(): void {
    debugger;
    this.prefersColorSchemeService.change$.subscribe(
      (prefersColorScheme: PrefersColorScheme): void => {
        if (prefersColorScheme === 'dark') {
          this.renderer2.addClass(document.body, 'omv-dark-theme');
        } else {
          this.renderer2.removeClass(document.body, 'omv-dark-theme');
        }
      }
    );
    // Set up the message handler when the component initializes
    this.messageHandler = this.renderer2.listen('window', 'message', (event) => {
      console.log("Received message:", event.data);
      // Handle the setSessionStorage event type
      if (event.data && event.data.type === 'setSessionStorage') {
        this.handleSetSessionStorage(event.data.data);
      }
    });
  }
  ngOnDestroy(): void {
    // Clean up the listener when the component is destroyed
    this.messageHandler();
  }
  private handleSetSessionStorage(data: any): void {
    debugger;
    console.log("Handling setSessionStorage event with data:", data);
    sessionStorage.setItem('username', data.username);
    sessionStorage.setItem('permissions', JSON.stringify(data.permissions));
    // Implement logic to handle the session storage update based on received data
    // For example, updating UI, storing data, etc.
    // Note: Direct manipulation of sessionStorage might be restricted due to Same-Origin Policy
    // Consider using Angular services or backend APIs for state management across domains
  }
}
