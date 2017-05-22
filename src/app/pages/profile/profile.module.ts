import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { ProfileRoutingModule } from './profile.routing';

import { ProfileComponent } from './profile.component';

import { UserService } from '../../core/services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ProfileRoutingModule
  ],
  declarations: [ProfileComponent],
  providers: [UserService]
})
export class ProfileModule { }
