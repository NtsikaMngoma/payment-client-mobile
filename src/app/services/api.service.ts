import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // API Path
  public BASE_PATH = 'http://localhost:8080/payments/v1/transact/card-payment';
  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Handle API Errors
  handleErrors(error: HttpErrorResponse) {
    if (error.error) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  // make payment
  payNow(item): Observable<CardPaymentRequest> {
    return this.http
    .post<CardPaymentRequest>(this.BASE_PATH, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
}
