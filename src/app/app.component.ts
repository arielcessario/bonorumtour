import { CoreProxies, AuthService } from 'ac-core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private coreProxies: CoreProxies, private auth: AuthService) {
    this.coreProxies.getAllUsers().subscribe(data => {
      console.log(data);
    });
  }
}
