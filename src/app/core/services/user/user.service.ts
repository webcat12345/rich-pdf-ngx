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

  getReceivedRequest(uid: string) {
    return this.db.list(`/users/${uid}/follower/requests`);
  }

  acceptFriendRequest(uid, sender_uid, request) {
    this.db.object(`/users/${uid}/follower/followers/${sender_uid}`).set(request);
    this.db.object(`/users/${sender_uid}/following/followings/${uid}`).set(request);
    this.db.object(`/users/${uid}/follower/requests/${sender_uid}`).remove();
    this.db.object(`/users/${sender_uid}/following/requests/${uid}`).remove();
  }

  unfollowUser(uid, other_uid) {
    this.db.object(`/users/${uid}/following/followings/${other_uid}`).remove();
    this.db.object(`/users/${other_uid}/follower/followers/${uid}`).remove();
  }
}
