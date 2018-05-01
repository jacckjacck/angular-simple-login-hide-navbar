import { Injectable, state } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth-service';

@Injectable()
export class AppGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthService) {}

    canActivate (
        route: ActivatedRouteSnapshot,
        ): Observable<boolean> | Promise<boolean> | boolean {
            return this.authService.isLoggedIn
            .map((isLoggedIn: boolean) => {
                if (!isLoggedIn) {
                  this.router.navigate(['/login']);
                  return false;
                }
                return true;
            });
    }

}
