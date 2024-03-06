import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  userEmail: any;

  constructor(private activate: ActivatedRoute) { }


  ngOnInit(): void {
    this.userEmail = this.activate.snapshot.paramMap.get('user');
    console.log(this.userEmail);
  }

}
