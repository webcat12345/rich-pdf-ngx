import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCheckboxModule, MdToolbarModule, MdIconModule, MdSidenavModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [MdButtonModule, MdCheckboxModule, MdToolbarModule, MdIconModule, MdSidenavModule]
})
export class SharedMaterialModuleModule { }
