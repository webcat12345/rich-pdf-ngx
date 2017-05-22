import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { RelationshipRoutingModule } from './relationship.routing';

import { RelationshipComponent } from './relationship.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RelationshipRoutingModule
  ],
  declarations: [RelationshipComponent]
})
export class RelationshipModule { }
