import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SweetAlertService } from 'ng2-sweetalert2';

import { UserService } from '../../core/services';
import { Profile, Account } from '../../core/models'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  profile: Profile = new Profile;
  account: Account = new Account;
  profile_subscription = new Subscription();
  auth_subscription = new Subscription();
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

  ngOnDestroy() {
    this.profile_subscription.unsubscribe();
    this.auth_subscription.unsubscribe();
  }

  getProfile() {
    this.profile_subscription = this.userService.getUserProfile(this.account.uid).subscribe(res => {
      if (res.$value !== null) {
        this.profile = res;
        this.account.registered = true;
      }
      this.isLoading = false;
    });
  }

  saveProfile() {
    this.isLoading = true;
    if (this.account.uid) {
      if (this.account.registered) {
        this.userService.updateUserProfile(this.account.uid, this.profile).then(res => {
          this.isLoading = false;
          this.swalService.swal('Your profile updated successfully', '', 'success');
        })
      } else {
        this.userService.saveUserProfile(this.account.uid, this.profile).then(res => {
          this.isLoading = false;
          this.swalService.swal('Your profile registered successfully', '', 'success');
        });
      }
    } else {
      this.swalService.swal('Something went wrong...', '', 'error');
    }
  }

}
