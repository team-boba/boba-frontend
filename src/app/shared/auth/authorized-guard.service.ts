import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationGuard implements CanActivate {

  constructor(
    private authService: AuthService
  ) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthorized()
      .then(
        (authenticated: boolean) => {
          if (authenticated) {
            this.authService.setIsHrLoggedIn(true);
            this.authService.getSerializeUserResponse();
            return true;
          } else {
            window.location.href = 'http://localhost:9999/auth/login';
          }
        }
      );
  }
}
