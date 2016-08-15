import { Component }   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  template: `
    <h2>LOGIN</h2>
    <p>{{message}}</p>
    <p>
      <label for="loginkey">Access key</label>
      <input
        type="text"
        class="form-control"
        id="loginkey"
        placeholder="Access key"
        [(ngModel)]="loginkey">
      <button
        type="button"
        class="btn btn-default"
        (click)="login()"
        *ngIf="!authService.isLoggedIn">
        Login
      </button>
      <button
        type="button"
        class="btn btn-default"
        (click)="logout()"
        *ngIf="authService.isLoggedIn">
        Logout
      </button>
    </p>
  `
})
export class LoginComponent {
  message: string;
  loginkey: string;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login(this.loginkey).subscribe(() => {
      this.setMessage();

      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ?
          this.authService.redirectUrl : '/admin';
        // Redirect the user
        this.router.navigate([redirect]);
      } else {
        this.message = 'Wrong access code!';
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
