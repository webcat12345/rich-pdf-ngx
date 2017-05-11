import { TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthenticationService } from './authentication.service';
import { LocalStorageModule } from 'angular-2-local-storage';
import { firebaseConfig } from '../../../../firebase/firebase-config';

describe('AuthenticationService', () => {
  beforeEach(() => {
    class MockRouter {
      navigate = jasmine.createSpy('navigate');
    }
    const mockRouter = new MockRouter();
    TestBed.configureTestingModule({
      imports: [
        LocalStorageModule.withConfig(),
        AngularFireModule.initializeApp(firebaseConfig, 'authentication-service-test'),
        AngularFireAuthModule
      ],
      providers: [
        AuthenticationService,
        {provide: Router, useValue: mockRouter}
      ]
    });
  });

  it('should ...', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
