import { Component } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  UserName: string = '';
  Email: string = '';
  Password: string = '';
  hide = true;


  RegisterForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required,
    Validators.minLength(8),
    Validators.maxLength(24)])
  })

  constructor(private authService: AuthService,
    private router: Router) { }


  SignUp() {
    this.authService.register(this.UserName, this.Email, this.Password).subscribe(
      (response) => {
        console.log('API response:', response);
        alert("Successfully registered");
        this.router.navigate(['/'])
        this.clearForm();
      },
      (error) => {
        console.log("Error:", error);
        if (error.status == 409) {
          alert("user email is already exist. try for another email");
        }
        else {
          alert("something went wrong. try again!")
        }
      }
    );
  }

  clearForm() {
    this.UserName = '';
    this.Email = '';
    this.Password = '';
  }

  get username() {
    return this.RegisterForm.get('username');
  }
  get email() {
    return this.RegisterForm.get('email');
  }
  get password() {
    return this.RegisterForm.get('password');
  }
}



