import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RelationshipComponent } from './relationship.component';

const routes: Routes = [
  {
    path: 'friends',
    component: RelationshipComponent,
  }, {
    path: '**',
    redirectTo: 'friends'
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class RelationshipRoutingModule {}
