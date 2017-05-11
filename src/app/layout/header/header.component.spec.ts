import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from './header.component';
import { AuthenticationService } from '../../core/services/authentication.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SharedMaterialModuleModule } from '../../shared/shared-material-module/shared-material-module.module';
import { LocalStorageModule } from 'angular-2-local-storage';
import { firebaseConfig } from '../../../../firebase/firebase-config';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    class MockRouter {
      navigate = jasmine.createSpy('navigate');
    }
    const mockRouter = new MockRouter();
    TestBed.configureTestingModule({
      imports: [
        SharedMaterialModuleModule,
        AngularFireAuthModule,
        LocalStorageModule.withConfig(),
        AngularFireModule.initializeApp(firebaseConfig, 'header-component-test'),
      ],
      declarations: [ HeaderComponent ],
      providers: [
        AuthenticationService,
        {provide: Router, useValue: mockRouter}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
