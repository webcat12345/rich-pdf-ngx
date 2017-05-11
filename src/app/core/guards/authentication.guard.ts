import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(
    private localStorageService: LocalStorageService,
    private routerService: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
  {
    if (this.localStorageService.get('USER_INFO')) {return true}

    this.routerService.navigate(['/login'], {queryParams: {returnUrl: state.url}});

    return true;
  }
}
