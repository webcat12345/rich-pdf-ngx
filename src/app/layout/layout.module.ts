import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedMaterialModuleModule } from '../shared/shared-material-module/shared-material-module.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedMaterialModuleModule
  ],
  declarations: [LayoutComponent, HeaderComponent, SidebarComponent],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
