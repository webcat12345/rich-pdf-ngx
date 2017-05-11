import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdToolbarModule,
  MdIconModule,
  MdSidenavModule,
  MdCardModule,
  MdInputModule,
  MdSelectModule,
  MdMenuModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdIconModule,
    MdSidenavModule,
    MdCardModule,
    MdInputModule,
    MdSelectModule,
    MdMenuModule
  ]
})
export class SharedMaterialModuleModule { }
