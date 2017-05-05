import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//firebase libraries
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { SharedMaterialModuleModule } from './shared/shared-material-module/shared-material-module.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LayoutModule } from './layout/layout.module';

export const firebaseConfig = {
  apiKey: 'AIzaSyCqzwqKtK0YOW7MJCracqXya9BxCf6TL10',
  authDomain: 'rich-pdf-ngx.firebaseapp.com',
  databaseURL: 'https://rich-pdf-ngx.firebaseio.com',
  storageBucket: 'rich-pdf-ngx.appspot.com',
  messagingSenderId: '751183709796'
};

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
    AngularFireModule.initializeApp(firebaseConfig, 'rich-pdf'), AngularFireAuthModule, AngularFireDatabaseModule,  //firebase setting
    FlexLayoutModule,
    SharedMaterialModuleModule,
    HttpModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
