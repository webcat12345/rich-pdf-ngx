import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/services/authentication.service';
import { UserInfo } from '../core/models/user.model'
import { Router } from '@angular/router';
import { SweetAlertService } from 'ng2-sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [SweetAlertService]
})
export class LoginComponent implements OnInit {

  user: UserInfo = new UserInfo('test@email.com', 'password');

  constructor(
    private authService: AuthenticationService,
    private routerService: Router,
    private swaService: SweetAlertService
  ) {
    this.authService.getAuthenticationState().subscribe(res => {
      if (res) {
        this.routerService.navigate(['/dashboard'])
      }});
  }

  ngOnInit() {
  }

  signInWithEmail() {
    this.authService.signInWithEmail(this.user.email, this.user.password);
  }

  signInWithGoogle() {
    this.authService.signInWithGooglePlus();
  }

  signInWithFacebook() {
    this.swaService.swal('Sorry...', 'Facebook app is not registered yet...', 'error');
  }

  signInWithTwitter() {
    this.swaService.swal('Sorry...', 'Twitter app is not registered yet...', 'error');
  }
}
