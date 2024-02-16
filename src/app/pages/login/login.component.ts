import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  hide = true;
  Email: string = '';
  Password: string = '';
  // Form: any[] | undefined;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required,
    Validators.minLength(8),
    Validators.maxLength(24)])
  })


  constructor(private authService: AuthService,
              private router :Router) { }


  loginUser() {
    this.authService.loginCheck(this.Email, this.Password).subscribe((response) => {
        console.log(response);
      },
      (error) => {
        console.log("Error:", error);
        if (error.status == 200 || error.status == 409) {
          alert("login successfully");
          this.router.navigate(['/home']);
          this.clearform();
        } else {
          alert("login information is wrong");
        }
      });
  }

  clearform(){
    this.Email = '';
    this.Password ='';
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
