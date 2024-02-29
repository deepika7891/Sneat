import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private apiUrl = 'https://localhost:7153/api/register';

  constructor(private httpclient: HttpClient, private route: Router) { }

  isAuthenticated = false;

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  // login user
  loginCheck(Email: string, Password: string): Observable<any> {

    const url = `${this.apiUrl}/login`;
    const login = { Email, Password };
    return this.httpclient.post(url, login);
  }

  // register user
  register(UserName: string, Email: string, Password: string): Observable<any> {
    const url = `${this.apiUrl}/signup`;
    const userdata = { UserName, Email, Password };
    return this.httpclient.post(url, userdata);
  }

  // logout our login page
  logout() {
    // redirect to login page
    // window.location.href = '/login';
    this.route.navigate(['/login'])
    this.isAuthenticated = false;
  }
}

