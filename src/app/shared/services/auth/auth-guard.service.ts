import {Injectable, inject} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateFn} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {tap} from 'rxjs/operators';

@Injectable({
  	providedIn: 'root'
})
export class PermissionsService {
  	constructor(private authService: AuthService, private router: Router) {}

  	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
	Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    	return this.authService.isAuthenticated().pipe(
      		tap((isAuthenticated: boolean) => {
        		if (!isAuthenticated) {
          			// User is not authenticated, redirect to login page
          			this.router.navigateByUrl('/login');
        		}
      		})
    	);
  	}
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
	Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
	return inject(PermissionsService).canActivate(next, state);
}
