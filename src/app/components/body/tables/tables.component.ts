import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/data.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  // itemsPerPage: number = 5;
  // page: number = 0;
  newadmin: any[] = [];
  sortDirection: string = 'asc';

  page = 1;
  itemsPerPage = 5; // Adjust the number of items per page as needed
  totalItems = 0;

  // editForm = new FormGroup({
  //   fullName: new FormControl('', [Validators.required]),
  //   email: new FormControl(''),
  //   phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
  //   state: new FormControl('', [Validators.required]),
  //   country: new FormControl(''),
  //   companyName: new FormControl([Validators.nullValidator])
  // })

  newFormData: FormGroup = this.fb.group({
    fullName: ['', Validators.required], // Required validator
    email: ['', [Validators.required, Validators.email]], // Required and email validators
    phoneNumber: ['', [Validators.required, Validators.minLength(10)]], // Required and a pattern (assuming a 10-digit number) validator
    state: ['', Validators.required], // Required validator
    country: ['', Validators.required], // Required validator
    companyName: ['', Validators.required], // Required validator
  });

  editingRowId: string = '';
  // isEditRow?: number;
  addRow: boolean = false;
  disableblank: boolean = false;
  formSubmitted = false;
  // isEdit: boolean = false;

  constructor(private dataService: DataService, private fb: FormBuilder ,private cdr:ChangeDetectorRef) { }

  ngOnInit() {
    this.fetchTableData();
  }

  onPageChange(event: any): void {
    this.page = event.offset + 1;
  }

  // fetch the data by get api 
  fetchTableData(): void {
    this.dataService.fetchTableData().subscribe(
      (data) => {
        this.admins = data;
        this.totalItems = this.admins.length;
        console.log('Table Data:', this.admins);
        // this.applyPagination();
      },
      (error) => {
        console.error('Error fetching table data:', error);
      }
    );
  }

  // delete row by name
  deleteById(id: string) {

    console.log("user delete id" + id);

    if (confirm("Are you sure you want to delete this?")) {
      this.dataService.deleteById(id).subscribe(
        (response) => {
          console.log("Row deleted successfully", response);
          alert("Deleted");
        },
        (error) => {
          console.error("Error deleting row:", error);
          this.fetchTableData(); // Optionally fetch the updated data after deletion
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
      // this.applyPagination();
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
  // onPageChange(event: any): void {
  //   this.page = event.pageIndex;
  //   this.itemsPerPage = event.pageSize;
  //   this.applyPagination();
  // }

  // // apply pagination
  // applyPagination() {
  //   const startIndex = this.page * this.itemsPerPage;
  //   const endIndex = startIndex + this.itemsPerPage;
  //   if (this.newadmin.length > endIndex) {
  //     this.page++; // Increment the page number
  //     this.applyPagination(); // Reapply pagination to display the next page
  //   } else {
  //     this.newadmin = this.admins.slice(startIndex, endIndex);
  //   }
  //   // this.newadmin = this.admins.slice(startIndex, endIndex);
  // }

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
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  }

  // editRow(row: any) {
  //   this.editingRowId = row.id;
  //   this.editForm.patchValue(row); 
  // }

  updateSaveRow() {
    console.log("editing row" + this.editingRowId);

    if (confirm("Do you want to save row ")) {
      this.dataService.updateRow(this.editingRowId, this.newFormData.value)
        .subscribe(
          (data: any) => {
            console.log("Update saveRow response: ", data);
            this.fetchTableData();
            this.editingRowId = ''; // Reset editing mode after saving changes
          },
          (error) => {
            console.log("Update saveRow error: ", error);
          }
        );
    }
  }

  // add new blank row 
  addBlankRow() {
    this.newFormData.reset();
    this.disableblank = true;

    this.totalItems = this.admins.length + 1 ;
    this.cdr.detectChanges(); 
    console.log("helo");
    
    this.admins.splice(0, 0, {
      companyName:null,country:null,email:null,fullName:null,phoneNumber:null,state:null});
      this.page = 0;
    this.addRow = true;
  }

  save() {
    this.formSubmitted = true;
    alert("Insert the valid data")
    if (this.newFormData.valid) {
      const formData = this.newFormData.value;
      alert("save the code")
      this.dataService.addNewRow(formData).subscribe(
        (data) => {
          console.log('Post data', data);
          
          this.addRow = false;
          this.fetchTableData();
          this.newFormData.reset();
          this.formSubmitted = false;
        },
        (error) => {
          console.log('Error posting data', error);
        }
      );
    }
  }

  cancel() {
    this.admins.splice(0, 1); // Remove the newly added empty row
    // this.isEditRow = undefined;
    this.addRow = false;
    this.newFormData.reset();

  }

  editItem(row : any) {
    this.editingRowId = row.id;
    this.newFormData.patchValue(row); 
  }


}




