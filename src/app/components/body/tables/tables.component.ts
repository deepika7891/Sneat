import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/data.service';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
})
export class TablesComponent implements OnInit {
  admins: any[] = [];
  fullName: string = '';
  searchText: string = '';
  phoneNumber: string = '';
  timer: number | undefined;
  itemsPerPage: number = 5;
  page: number = 0;
  newadmin: any[] = [];
  sortDirection: string ='asc';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.fetchTableData();
  }

  // fetch the data by get api 
  fetchTableData() {
    this.dataService.fetchTableData().subscribe(
      (data) => {
        this.admins = data;
        console.log('Table Data:', this.admins);
        this.applyPagination();
      },
      (error) => {
        console.error('Error fetching table data:', error);
      }
    );
  }

  // delete row by name
  distroy(fullName: string) {
    if (confirm("Are you sure you want to delete this?")) {
      this.dataService.delete(fullName).subscribe(
        () => {
          console.log("Row deleted successfully");
          alert("Deleted");
        },
        (error) => {
          this.fetchTableData();
        }
      );
    }
  }

  // search Item by name and number
  SearchItem(val: any) {
    console.log("searching");

    clearTimeout(this.timer);

    this.timer = window.setTimeout(() => {
      console.log(val);
      this.applyPagination();
      if (this.searchText != null && this.searchText != '') {
        const filteredAdmins = this.admins.filter(item =>
          item.fullName.toLowerCase().includes(this.searchText.toLowerCase()) ||
          item.phoneNumber.includes(this.searchText)
        );
        console.log("admins... :- " + filteredAdmins.length);
        this.newadmin = filteredAdmins;
      }

    }, 1000);
  }

  // pagination 
  onPageChange(event: any): void {
    this.page = event.pageIndex;
    this.itemsPerPage = event.pageSize;
    this.applyPagination();
  }
  
  // apply pagination
  applyPagination() {
    const startIndex = this.page * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.newadmin = this.admins.slice(startIndex, endIndex);
  }
  
  //Sorting row on click asc and desc
  sorting(property: any) {
    console.log(property);
  
    const sortedAdmins = [...this.admins].sort((a, b) => {
      const aValue = a[property];
      const bValue = b[property];
  
      // Toggle sorting direction on each click
      const compareResult = this.sortDirection === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
  
      return compareResult;
    });
  
    this.admins = sortedAdmins;
  
    // Toggle sorting direction for the next click
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  
    this.applyPagination(); // Apply pagination after sorting
  }
}



