import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://localhost:7153/api/Senat';

  constructor(private http: HttpClient) {}

  fetchTableData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  delete(fullName: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${fullName}`);
  }
}
