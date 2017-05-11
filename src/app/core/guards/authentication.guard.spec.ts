import { TestBed, async, inject } from '@angular/core/testing';
import { LocalStorageModule } from 'angular-2-local-storage';
import { Router, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';

describe('AuthenticationGuard', () => {
  beforeEach(() => {
    class MockRouter {
      navigate = jasmine.createSpy('navigate');
    }
    const mockRouter = new MockRouter();
    TestBed.configureTestingModule({
      imports: [
        LocalStorageModule.withConfig(),
        RouterModule
      ],
      providers: [
        AuthenticationGuard,
        {provide: Router, useValue: mockRouter}
      ],
    });
  });

  it('should ...', inject([AuthenticationGuard], (guard: AuthenticationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
