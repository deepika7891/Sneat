import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//  private isAuthenticated = false;

  private apiUrl = 'https://localhost:7153/api/register';
  constructor(private httpclient: HttpClient,private route:Router) { }


  loginCheck(Email:string, Password:string): Observable<any> {
    const url = `${this.apiUrl}/Login`;
    const login = {Email,Password};
    return this.httpclient.post(url, login);
  }

  register(UserName: string, Email: string, Password: string): Observable<any> {
    const url = `${this.apiUrl}/signup`;
    const userdata = { UserName, Email, Password };
    return this.httpclient.post(url, userdata);
  }

  // isLoggin():boolean{
  //   return this.isAuthenticated ;
  // }

  logout():void{
    // this.isAuthenticated = false;
    this.route.navigate(['/']);
  }
}
