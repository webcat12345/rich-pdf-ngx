import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { DashboardRoutingModule } from './dashboard.routing';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent],
})
export class DashboardModule { }
