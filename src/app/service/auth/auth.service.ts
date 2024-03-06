import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   token: string | null = null;

  private apiUrl = 'https://localhost:7153/api/register';

  constructor(private httpclient: HttpClient, private route: Router) { }

  isAuthenticated = false;

  isLoggedIn(): boolean {
    // return this.isAuthenticated ;
    return !!this.getToken();
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
    this.route.navigate(['/login'])
    this.isAuthenticated = false;
    this.token = null;
    localStorage.removeItem('auth_token');
  }

  setToken(token: string): void {
    this.token = token;
    // Store the token securely, e.g., in an HTTP-only cookie or local storage
    // Example using local storage:
    localStorage.setItem('auth_token', token);
    this.isAuthenticated = true;
  }

  getToken(): string | null {
    // Retrieve the token securely
    // Example using local storage:
    // return localStorage.getItem('auth_token');
    const storedToken = localStorage.getItem('auth_token');
    console.log('Retrieved token from localStorage:', storedToken);
    return storedToken;
  }
}

