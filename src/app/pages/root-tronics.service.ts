import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RootTronics } from './root-tronics';



@Injectable({
  providedIn: 'root'
})
export class RootTronicsService {

  constructor(private httpClient: HttpClient) { }

  // baseURL
  private baseURL = "http://localhost:3000/";

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  addEmail(email: any): Observable<RootTronics> {
      return this.httpClient.post<RootTronics>(`${this.baseURL} + /posts/`, email).pipe(
        catchError(this.handleError)
      )
  }


  // Error handling
    handleError(error: HttpErrorResponse) {
      console.log('=======', error);      
      return throwError(error.message || "Server Error");
    }

}
