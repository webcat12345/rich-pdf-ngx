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

  saveUserProfile(uid: string, profile) {
    return this.db.object(`/users/${uid}`).set(profile);
  }

  updateUserProfile(uid: string, profile) {
    return this.db.object(`/users/${uid}`).update(profile);
  }

  getUserProfile(uid: string) {
    return this.db.object(`/users/${uid}`);
  }

  getRegisteredUsers() {
    return this.db.list(`/users/`)
  }

  sendFriendRequest(sender_uid: string, receiver_uid: string, request) {
    this.db.object(`/users/${receiver_uid}/follower/requests/${sender_uid}`).set(request);
    this.db.object(`/users/${sender_uid}/following/requests/${receiver_uid}`).set(request);
  }
}
