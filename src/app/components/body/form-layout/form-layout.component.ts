import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  submitForm(form:any[]): void {
    this.http.post(this.apiUrl, form).subscribe(
      (data) => {
        alert('Form submitted successfully');
        console.log('Response:', data);
      },
      (error) => {
        alert('Error submitting form');
        console.error('Error:', error);
      }
    );
  }

  resetForm(form: NgForm): void {
    form.resetForm();
    alert('Reset your form');
  }
}
