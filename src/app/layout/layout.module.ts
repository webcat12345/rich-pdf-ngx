import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedMaterialModuleModule } from '../shared/shared-material-module/shared-material-module.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NAV_DROPDOWN_DIRECTIVES } from '../shared/directives/nav-dropdown.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedMaterialModuleModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [LayoutComponent, HeaderComponent, SidebarComponent, NAV_DROPDOWN_DIRECTIVES],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
