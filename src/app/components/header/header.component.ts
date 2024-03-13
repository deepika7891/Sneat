import { Component, Input } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input() username: any;

  constructor(private authService: AuthService, private router: Router) { }

  logout(): void {
    if (confirm("are you sure logout your id ?")) {
      this.authService.logout();
      const username = localStorage.getItem('user');
      console.log("get username", username);
      localStorage.removeItem('user');

    }
    else {
      console.log("logout not");

    }
  }

  profile() {
    this.router.navigate(['/home/account-setting'])
  }


}
