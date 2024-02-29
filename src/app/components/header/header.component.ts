import { Component } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
     
  constructor (private authService : AuthService , private router : Router){}

      logout() : void{
        if(confirm("are you sure logout your id ?")){
          this.authService.logout();
        }
        else{
          console.log("logout not");
          
        }
      }

      profile(){
        this.router.navigate(['/home/account-setting'])
      }

      hello : string = "Ram";
}
