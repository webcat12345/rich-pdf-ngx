import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { LocalStorageService } from 'angular-2-local-storage';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UserService {

  user: Observable<firebase.User>;
  userListRef: FirebaseListObservable<any[]>;

  constructor(
    private afAuth: AngularFireAuth,
    private localStorageService: LocalStorageService,
    private db: AngularFireDatabase
  ) {
    this.user = afAuth.authState;
    this.userListRef = db.list('/users');
  }

  getUserInfo(): Observable<firebase.User> {
    return this.user;
  }

  getAllDB(): FirebaseListObservable<any[]> {
    return this.userListRef;
  }

  saveUserProfile(uid: string, profile) {
    return this.db.object(`/users/${uid}`).set(profile);
  }

  updateUserProfile(uid: string, profile) {
    return this.db.object(`/users/${uid}`).update(profile);
  }

  getUserProfile(uid: string) {
    return this.db.object(`/users/${uid}`);
  }
}
