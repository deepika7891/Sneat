import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
})
export class TablesComponent implements OnInit {
  private apiUrl = 'https://localhost:7153/api/Senat';
  admins: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchTableData();
  }

  fetchTableData(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (data) => {
        this.admins = data;
        console.log('Table Data:', this.admins);
      },
      (error) => {
        console.error('Error fetching table data:', error);
      }
    );
  }
}