import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/services/authentication.service';
import { UserInfo } from '../core/models/user.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:UserInfo = new UserInfo('test@email.com', 'password');

  constructor(
    private authService: AuthenticationService,
    private routerService: Router
  ) {
    this.authService.getAuthenticationState().subscribe(res=> {if (res) this.routerService.navigate(['/dashboard'])});
  }

  ngOnInit() {
  }

  signInWithEmail() {
    this.authService.signInWithEmail(this.user.email, this.user.password);
  }

  signInWithGoogle() {
    this.authService.signInWithGooglePlus();
  }
}
