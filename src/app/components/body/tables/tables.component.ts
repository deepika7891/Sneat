import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/data.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
})
export class TablesComponent implements OnInit {
  admins: any[] = [];

  // constructor(private http: HttpClient) { }

  constructor(private dataService : DataService) {}

  ngOnInit() {
    this.fetchTableData();
  }


  fetchTableData() {
    this.dataService.fetchTableData().subscribe(
      (data) => {
        this.admins = data;
        console.log('Table Data:', this.admins);
      },
      (error) => {
        console.error('Error fetching table data:', error);
      }
    );
  }

  distroy(fullName: string) {
    if (confirm("Are you sure you want to delete this?")) {
      this.dataService.delete(fullName).subscribe(
        () => {
          console.log("Row deleted successfully");
          alert("Deleted");
        },
        (error) => {
          this.fetchTableData();
          console.error("Error deleting row:", error);
        }
      );
    }
  }

}

