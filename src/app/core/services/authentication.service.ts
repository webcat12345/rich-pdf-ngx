import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class AuthenticationService {

  user: Observable<firebase.User>;

  constructor(
    private afAuth: AngularFireAuth,
    private localStorageService: LocalStorageService
  ) {
    this.user = afAuth.authState;
  }

  getAuthenticationState():Observable<firebase.User> {
    return this.user;
  }

  signInWithEmail(email:string, password:string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(res=>{
      this.localStorageService.set('USER_INFO', JSON.stringify(res));
    });
  }

  signOut() {
    this.localStorageService.remove('USER_INFO');
    this.afAuth.auth.signOut();
  }
}
