import { Component} from '@angular/core';


@Component({
  selector: 'app-form-layout',
  templateUrl: './form-layout.component.html',
  styleUrl: './form-layout.component.css'
})
export class FormLayoutComponent{

  submitForm(...forms: any[]): void {
    console.log('Form Submitted:', forms);
    alert("forn submitted");
    
  }

  resetForm(...forms: any[]): void {
    forms.forEach(form => form.resetForm());
    alert("reset your form");
  }

}
