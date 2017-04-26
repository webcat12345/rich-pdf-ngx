import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCheckboxModule, MdToolbarModule, MdIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule, MdCheckboxModule
  ],
  declarations: [],
  exports: [MdButtonModule, MdCheckboxModule, MdToolbarModule, MdIconModule]
})
export class SharedMaterialModuleModule { }
