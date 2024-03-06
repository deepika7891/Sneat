import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-layout',
  templateUrl: './form-layout.component.html',
  styleUrls: ['./form-layout.component.css'],
})
export class FormLayoutComponent implements OnInit {
  private apiUrl = 'https://localhost:7153/api/Senat/AddSneat';
  
  newadmin = {
    fullName: '',
    email: '',
    PhoneNumber: '',
    State: '',
    Country: '',
    CompanyName: '',
  };

  FullName : FormControl = new FormControl('',[Validators.required]);
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  PhoneNumber : FormControl = new FormControl('',[Validators.required,Validators.minLength(10)]);
  State : FormControl = new FormControl('',[Validators.required]);
  Country : FormControl = new FormControl('',[Validators.required]);
  CompanyName : FormControl = new FormControl('',[Validators.required]);

  AdminForm = new FormGroup({
      FullName : this.FullName,
      email : this.email,
      PhoneNumber : this.PhoneNumber,
      State : this.State,
      Country : this.Country,
      CompanyName : this.CompanyName
  })
  
  constructor(private http: HttpClient , private route:Router) {}

  ngOnInit(): void {}

  submitForm(form:any[]): void {
    this.http.post(this.apiUrl, form).subscribe(
      (data) => {
        alert('Form submitted successfully');
        console.log('Response:', data);
        // this.newadmin;
        this.route.navigate(['home/tables'])
      },
      (error) => {
        alert('Error submitting form');
        console.error('Error:', error);
      }
    );
  }

  
}
