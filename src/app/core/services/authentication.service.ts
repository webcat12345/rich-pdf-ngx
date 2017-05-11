import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {

  user: Observable<firebase.User>;

  constructor(
    private afAuth: AngularFireAuth,
    private localStorageService: LocalStorageService,
    private routerService: Router
  ) {
    this.user = afAuth.authState;
  }

  getAuthenticationState(): Observable<firebase.User> {
    return this.user;
  }

  signInWithEmail(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(res => {
      this.saveToken(res);
    });
  }

  signInWithGooglePlus() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res => {
      this.saveToken(res);
    });
  }

  signOut() {
    this.localStorageService.remove('USER_INFO');
    this.afAuth.auth.signOut().then(res => {this.routerService.navigate(['/login'])});
  }

  saveToken(res) {
    this.localStorageService.set('USER_INFO', JSON.stringify(res));
  }
}
