import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {

  username: any;
  email: any;

  ngOnInit(): void {
   this.getUser();
  }

  getUser(){
    const userString = localStorage.getItem('user');

    if (userString) {
      const user = JSON.parse(userString);
      this.username = user.username;
      this.email = user.email;
      console.log('Username:', this.username);
    } else {
      console.log('User data not found in localStorage');
    }
  }

  saveChanges(...forms: any[]): void {
    console.log('Form Data:', forms);
    alert("form submited")

  }

  resetForm(form: NgForm): void {
    form.resetForm();
  }


}
