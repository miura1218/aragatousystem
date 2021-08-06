import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders, HttpEventType, HttpRequest, HttpErrorResponse, HttpEvent } from '@angular/common/http'
import { retry, map, catchError, tap } from 'rxjs/operators';
import { throwError, Observable, Subject, asapScheduler, pipe, of , from, interval, merge, fromEvent } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OtoiawaseService {

  constructor(
private http:HttpClient
    ) { }
    private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
   toiawase_data(toiawase_data:any): Observable < any > {//新規ユーザーの登録
    toiawase_data = JSON.stringify(toiawase_data);
    const formData: FormData = new FormData();
    formData.append('toiawase_data', toiawase_data);

    // return this.http.post(`http://localhost/koment_okuru.php`,{ params: { koment:koment} })

    return this.http.post(`http://localhost/toiawase_data.php`,formData)

      .pipe(
        //tap(data => console.log('data',data)),
        catchError(err => [ of ()])
      );
  }
 
}
