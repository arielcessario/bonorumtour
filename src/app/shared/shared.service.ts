import { Injectable } from '@angular/core';
import {
  ScrollToService,
  ScrollToConfigOptions
} from '@nicky-lenaers/ngx-scroll-to';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor(
    private _scrollToService: ScrollToService,
    private router: Router
  ) {}

  navigateTo(destination) {
    if (destination.indexOf('#') > -1) {
      const config: ScrollToConfigOptions = {
        target: destination
      };

      this._scrollToService.scrollTo(config);
    } else {
      this.router.navigate([destination]);
    }
  }
}
