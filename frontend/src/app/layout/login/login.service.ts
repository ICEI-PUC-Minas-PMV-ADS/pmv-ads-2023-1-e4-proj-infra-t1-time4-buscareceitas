import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpErrorResponse, HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  httpOptions= {​​​​​​​​
    headers:new HttpHeaders({​​​​​​​​'Content-Type':'application/json',}​​​​​​​​)
   }

   
  public findLogin(model: any): Observable<any> {
    return this.http.post<any>(`${environment.baseApi}/v1/sessions/login`, {
      email: model.email,
      password: model.password
    });
  }


}
