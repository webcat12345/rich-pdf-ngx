import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './core/guards/authentication.guard';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
      }, {
        path: 'profile',
        loadChildren: './pages/profile/profile.module#ProfileModule'
      }, {
        path: 'relationship',
        loadChildren: './pages/relationship/relationship.module#RelationshipModule'
      }
    ],
    canActivate: [AuthenticationGuard]
  }, {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent
  }, {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
