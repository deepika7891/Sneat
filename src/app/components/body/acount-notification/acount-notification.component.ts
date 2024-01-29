import { Component } from '@angular/core';

interface option {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-acount-notification',
  templateUrl: './acount-notification.component.html',
  styleUrl: './acount-notification.component.css'
})
export class AcountNotificationComponent {
  columnWidth = 60;
  //  isCheckboxCentered = true;
   data=[
      {type:'New for you'},
      {type:'Account activity'},
      {type:'A new browser used to sign in'},
      {type:'A new device is linked'}
   ]

   selectedValue: string | undefined;
   
   options: option[] = [
    {value: 'only when I am online', viewValue: 'only when I am online '},
    {value: 'Anytime', viewValue: 'Anytime'},
  ];
}
