import { Employee } from './employee';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'http://dummy.restapiexample.com/api/v1';

  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

  constructor(private http: HttpClient) {}

  createEmployee(emp): Observable<{}> {
    
    return this.http.post<Employee>(
      this.baseUrl + '/create',
      JSON.stringify(emp),
      this.httpOptions
    );
  }
}
