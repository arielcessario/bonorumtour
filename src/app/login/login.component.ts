import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'ac-core';

@Component({
  selector: 'bon-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  err: string;

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.email, this.password).subscribe(
      data => {
        console.log(data);
      },
      error => {
        this.err = error;
        setTimeout(() => (this.err = undefined), 4000);
      }
    );
  }
}
