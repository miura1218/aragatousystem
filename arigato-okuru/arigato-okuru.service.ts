import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders, HttpEventType, HttpRequest, HttpErrorResponse, HttpEvent } from '@angular/common/http'
import { retry, map, catchError, tap } from 'rxjs/operators';
import { throwError, Observable, Subject, asapScheduler, pipe, of , from, interval, merge, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArigatoOkuruService {

 constructor(    private http:HttpClient
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


    arigatou_user_data(): Observable < any > {
    return this.http.get(`http://localhost/dbc.php`)

      .pipe(
        //tap(data => console.log('data',data)),
        catchError(err => [ of ()])
      );
  }

     komento_okuru(koment:any): Observable < any > {
    koment = JSON.stringify(koment);
    const formData: FormData = new FormData();
    formData.append('koment', koment);

    // return this.http.post(`http://localhost/koment_okuru.php`,{ params: { koment:koment} })

    return this.http.post(`http://localhost/koment_okuru.php`,formData)

      .pipe(
        //tap(data => console.log('data',data)),
        catchError(err => [ of ()])
      );
  }


}

//   arigatou_login_get(syain:any): Observable < any > { //読み込み
//     //return this.http.get('http://192.168.1.112/php/shouhin_get_all.php')
//     syain = JSON.stringify(syain);
//     return this.http.get(`http://localhost/arigatou_login_get.php`, { params: { syain: syain } })

//       //return this.http.get('http://192.168.1.112/php/shouhin_get_all.php')

//       .pipe(
//         //retry(3),
//         catchError(this.handleError)
//       );
//   // }


// }