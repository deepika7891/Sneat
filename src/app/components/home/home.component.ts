import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  userName: any;

  constructor(private activate: ActivatedRoute) { }


  ngOnInit(): void {
    this.getuser();
  }

  getuser() {
		const userString = localStorage.getItem('user');

		if (userString) {
			const user = JSON.parse(userString);
			this.userName = user.username;
			console.log('Username:', this.userName);
		} else {
			console.log('User data not found in localStorage');
		}
	}

}
