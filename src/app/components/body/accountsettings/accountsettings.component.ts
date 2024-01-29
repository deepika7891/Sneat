import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountsettings',
  templateUrl: './accountsettings.component.html',
  styleUrl: './accountsettings.component.css'
})
export class AccountsettingsComponent implements OnInit {
  ngOnInit() { }
  account = true;
  security = false;
  notification = false;

  Account() {
    this.account = true;
    this.security = false;
    this.notification = false;
  }

  Security() {
    this.account = false;
    this.security = true;
    this.notification = false;
  }

  Notification() {
    this.account = false;
    this.security = false;
    this.notification = true;
  }

}
