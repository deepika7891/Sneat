import {  Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../service/auth/auth.service'

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  // authService: AuthService= Inject(AuthService);

  private isAuthenticated = true;

  isLoggingIn(): boolean {
    return this.isAuthenticated;
  }
  // route : Router = Inject(Router);
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this.isLoggingIn()) {
      return true; // Allow access to the route
    } else {
      console.log("Enter your login page first.");  
      this.router.navigate(['/']); // Redirect to login page if not authenticated
      return false;
    }
  }
}


