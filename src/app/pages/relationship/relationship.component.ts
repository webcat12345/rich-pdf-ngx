import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SweetAlertService } from 'ng2-sweetalert2';

import { Profile, Account, Request } from '../../core/models';
import { UserService } from '../../core/services';

@Component({
  selector: 'app-relationship',
  templateUrl: './relationship.component.html',
  styleUrls: ['./relationship.component.scss']
})
export class RelationshipComponent implements OnInit, OnDestroy {

  reg_userSubscription = new Subscription();
  auth_subscription = new Subscription();
  profile_subscription = new Subscription();
  searchKeyword = '';
  account: Account = new Account();
  profile: Profile = new Profile();
  users: Array<Profile> = [];
  isLoading = false;
  constructor(
    private userService: UserService,
    private swalService: SweetAlertService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.auth_subscription = this.userService.getUserInfo().subscribe(
      (res) => {
        if (res) {
          this.account.uid = res.uid;
          this.getProfile();
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getProfile() {
    this.profile_subscription = this.userService.getUserProfile(this.account.uid).subscribe(res => {
      if (res.$value !== null) {
        this.profile = res;
        this.getRegisteredUsers();
      } else {
        this.swalService.swal('Your have to register your profile first.', '', 'info');
      }
      this.isLoading = false;
    });
  }

  getRegisteredUsers(): void {
    this.isLoading = true;
    this.reg_userSubscription = this.userService.getRegisteredUsers().subscribe(res => {
      this.users = [];
      res.forEach(item => {
        let user = new Profile();
        user = item;
        if (user['$key'] !== this.account.uid) {
          user['relation'] = this.isRequestedUser(user['$key']) ? 'pending' : 'unknown';
          if (this.isMyFriend(user['$key'])) {
            user['relation'] = 'following'
          }
          this.users.push(user);
          this.isLoading = false;
        }
      });
    });
  }

  ngOnDestroy() {
    this.reg_userSubscription.unsubscribe();
    this.auth_subscription.unsubscribe();
    this.profile_subscription.unsubscribe();
  }

  followUser(user: Profile): void {
    if (this.account.uid && user['$key']) {
      this.isLoading = true;
      const request = new Request();
      request.senderUsername = this.profile.userName;
      this.userService.sendFriendRequest(this.account.uid, user['$key'],  request);
    }
  }

  unfollowUser(user: Profile): void {
    if (this.account.uid && user['$key']) {
      this.isLoading = true;
      this.userService.unfollowUser(this.account.uid, user['$key']);
    }
  }

  private isRequestedUser(user_uid): boolean {
    let flag = false;
    if (this.profile) {
      if (this.profile['following']) {
        if (this.profile['following']['requests']) {
          Object.keys(this.profile['following']['requests']).forEach(uid => {
            if (user_uid === uid) {
              flag = true;
            }
          });
        }
      }
    }
    return flag;
  }

  private isMyFriend(user_uid): boolean {
    let flag = false;
    if (this.profile) {
      if (this.profile['following']) {
        if (this.profile['following']['followings']) {
          Object.keys(this.profile['following']['followings']).forEach(uid => {
            if (user_uid === uid) {
              flag = true;
            }
          });
        }
      }
    }
    return flag;
  }
}
