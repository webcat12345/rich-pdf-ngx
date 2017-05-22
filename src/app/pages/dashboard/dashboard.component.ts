import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SweetAlertService } from 'ng2-sweetalert2';

import { UserService } from '../../core/services';
import { Account, Profile, Request } from '../../core/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  auth_subscription = new Subscription();
  profile_subscription = new Subscription();
  rece_requestPending_subscription = new Subscription();
  account: Account = new Account();
  profile: Profile = new Profile();
  requests: Array<Request> = [];
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
          this.getReceivedRequests();
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnDestroy() {
    this.auth_subscription.unsubscribe();
    this.profile_subscription.unsubscribe();
    this.rece_requestPending_subscription.unsubscribe();
  }

  getProfile() {
    this.profile_subscription = this.userService.getUserProfile(this.account.uid).subscribe(res => {
      if (res.$value !== null) {
        this.profile = res;
      } else {
        this.swalService.swal('Your have to register your profile first.', '', 'info');
      }
      this.isLoading = false;
    });
  }

  getReceivedRequests() {
    this.rece_requestPending_subscription = this.userService.getReceivedRequest(this.account.uid).subscribe(res => {
      this.requests = [];
      res.forEach(item => {
        this.requests.push(item);
      });
      this.isLoading = false;
    });
  }

  acceptRequest(request) {
    const friend = new Request();
    friend.senderUsername = request.senderUsername;
    this.userService.acceptFriendRequest(this.account.uid, request['$key'], friend);
  }
}
