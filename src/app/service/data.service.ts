import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://localhost:7153/api/Senat';
  private adddata = 'https://localhost:7153/api/Senat/AddSneat';

  // private AdminUrl = 'https://localhost:7153/api/AdminSneat/AddAdmin';

  constructor(private http: HttpClient) { }

  fetchTableData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteById(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }


  addNewRow(row: any): Observable<any> {
    return this.http.post(this.adddata, row);
  }

  updateRow(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

}

// admindetails(formData: any): Observable<any> {
//   const httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//       // Add other headers as needed.
//     }),
//   }
//   return this.http.post(`${this.AdminUrl}`, formData, httpOptions).pipe(
//     catchError((error) => {
//       console.error('Error in API request:', error);
//       throw error; // Re-throw the error to propagate it to the subscriber.
//     })
//   );
// }