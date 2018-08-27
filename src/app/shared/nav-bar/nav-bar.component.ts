import { Component, OnInit } from '@angular/core';

import { SharedService } from '../shared.service';
import { Router, NavigationEnd } from '@angular/router';
import { CoreService, AuthenticationService } from 'ac-core';

@Component({
  selector: 'bon-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isCollapsed = true;
  selectedNavLink = 'home';
  logged = false;

  constructor(
    private router: Router,
    private sharedService: SharedService,
    private coreService: CoreService,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.router.events.forEach(event => {
      if (event instanceof NavigationEnd) {
        this.selectedNavLink = '' + event.url;
      }
    });

    this.coreService.showToast.subscribe(data => {
      console.log(data);
    });

    this.logged = this.authService.getLoginStatus();
    this.coreService.getLoginStatus.subscribe(data => {
      this.logged = data;
      if (!data) {
        this.selectedNavLink = '/login';
        this.sharedService.navigateTo('/login');
      }else{
        this.selectedNavLink = '/cotizador';
        this.sharedService.navigateTo('/cotizador');
      }
    });
  }

  logout() {
    this.authService.logout();
  }

  navigateTo(destination) {
    if (
      this.selectedNavLink !== '' + '/main' &&
      this.selectedNavLink !== '/' &&
      destination.indexOf('#') > -1
    ) {
      this.router.navigate(['/']);

      setTimeout(() => {
        if (destination.replace('#', '').indexOf('banner-top') > -1) {
          this.selectedNavLink = '/';
        } else {
          this.selectedNavLink = '/' + destination.replace('#', '');
        }
        this.sharedService.navigateTo(destination);
      }, 10);
    } else {
      if (destination.replace('#', '').indexOf('banner-top') > -1) {
        this.selectedNavLink = '/';
      } else {
        this.selectedNavLink = '/' + destination.replace('#', '');
      }
      this.sharedService.navigateTo(destination);
    }
  }
}
