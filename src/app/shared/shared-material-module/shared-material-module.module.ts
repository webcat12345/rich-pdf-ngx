import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule, MdCheckboxModule
  ],
  declarations: [],
  exports: [MdButtonModule, MdCheckboxModule]
})
export class SharedMaterialModuleModule { }
