import { Component } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
     
  constructor (private authService : AuthService){}

      logout() : void{
        if(confirm("are you sure logout your id ?")){
          this.authService.logout();
        }
        else{
          console.log("logout not");
          
        }
      }
}
