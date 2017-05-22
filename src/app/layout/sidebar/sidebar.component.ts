import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { UserService } from '../../core/services';
import { Account, Profile } from '../../core/models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  public disabled = false;
  public status: {isopen: boolean} = {isopen: false};
  auth_subscription: Subscription = new Subscription();
  profile_subscription: Subscription = new Subscription();
  account: Account = new Account();
  profile: Profile = new Profile();
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.auth_subscription = this.userService.getUserInfo().subscribe(res => {
      if (res) {
        this.account.uid = res.uid;
        this.getProfile();
      }
    });
  }

  ngOnDestroy() {
    this.auth_subscription.unsubscribe();
    this.profile_subscription.unsubscribe();
  }

  getProfile() {
    this.profile_subscription = this.userService.getUserProfile(this.account.uid).subscribe(res => {
      if (res.$value !== null) {
        this.profile = res;
      } else {
      }
    });
  }

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

}
