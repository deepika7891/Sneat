import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  saveChanges(...forms: any[]): void {
      console.log('Form Data:', forms);
      alert("form submited")
    
  }

  resetForm(form: NgForm): void {
    form.resetForm();
  }
}
