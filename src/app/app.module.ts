import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// firebase libraries
import { firebaseConfig } from '../../firebase/firebase-config';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
// flexlayout and angular material
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { SharedMaterialModuleModule } from './shared/shared-material-module/shared-material-module.module';
// others
import { SweetAlertService } from 'ng2-sweetalert2';
import { LocalStorageModule } from 'angular-2-local-storage';
// user defined
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LayoutModule } from './layout/layout.module';

import { AuthenticationService } from './core/services/authentication.service';
import { AuthenticationGuard } from './core/guards/authentication.guard';
import { UserService } from './core/services';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NoopAnimationsModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, 'rich-pdf'), AngularFireAuthModule, AngularFireDatabaseModule,  // firebase setting
    FlexLayoutModule,
    SharedMaterialModuleModule, // angular material modules
    LocalStorageModule.withConfig({prefix: '_', storageType: 'localStorage'}), // localstorage setting
    AppRoutingModule,
    LayoutModule
  ],
  providers: [AuthenticationService, AuthenticationGuard, SweetAlertService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
