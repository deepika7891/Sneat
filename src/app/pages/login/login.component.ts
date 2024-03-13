import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';
import { catchError } from 'rxjs';

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

  // userEmail :string = this.Email;

  constructor(private authService: AuthService,
    private router: Router) { }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  loginUser() {
    console.log("hello login here!");
    // this.userEmail = this.loginForm.value.email;

    this.authService.loginCheck(this.Email, this.Password).subscribe(
      (response: any) => {
        console.log('API response:', response);
        this.authService.isAuthenticated = true; // Set isAuthenticated to true
        // alert("Successfully login");
        // alert(response)
        alert("Successfully logged in. Username: " + response.username);
        // const userObject = { user: response.username };
        // console.log(userObject);

        const username = response.username;

        //generate token set 
        const generatedToken = this.generateSixDigitToken();
        console.log('Generated 6-digit token:', generatedToken);
        this.authService.setToken(generatedToken);

        // store username in local storage key user
        localStorage.setItem("user",JSON.stringify(response));

        this.router.navigate(['/home'])
        this.clearForm();
      },
      (error) => {
        console.log("Error:", error);
        if (error.status == 409) {
          this.authService.isAuthenticated = false;
          alert("user email is already exist. try for another email");
        }
        else {
          this.authService.isAuthenticated = false;
          alert("email is not found sorry. try again!")
          const storedToken = this.authService.getToken();
          console.log('Stored token:', storedToken);
        // const username = JSON.parse(localStorage.getItem("user"));
          
        }
      }
    );

  }

  // this.authService.loginCheck(this.Email, this.Password).then((val:any)=>{
  //   alert(val);
  // }).catch((err:any)=>{
  //   console.log('err', err);
  // })
  clearForm() {
    this.Email = '';
    this.Password = '';
  }

  generateSixDigitToken(): string {
    const min = 100000; // Minimum 6-digit number
    const max = 999999; // Maximum 6-digit number
    const sixDigitToken = Math.floor(Math.random() * (max - min + 1)) + min;
    return sixDigitToken.toString();
  }

}

// this.authService.loginCheck(this.Email, this.Password).pipe(
//   catchError(error => {
//     console.error("Error:", error);
//     // this.handleLoginError("An unexpected error occurred");
//     throw error; // Rethrow the error after handling or logging
//   })
// ).subscribe(
//   (response) => {
//     console.log(response);
//     this.handleSuccessfulLogin();
//   }
// );


// loginUser() {
//   this.authService.loginCheck(this.Email, this.Password).subscribe((response) => {
//       console.log(response);
//     },
//     (error) => {
//       console.log("Error:", error);
//       if (error.status == 200 || error.status == 409) {
//         alert("login successfully");
//         this.router.navigate(['/home']);
//         this.clearform();
//       } else {
//         alert("login information is wrong");
//       }
//     });
// }

// clearform(){
//   this.Email = '';
//   this.Password ='';
// }

