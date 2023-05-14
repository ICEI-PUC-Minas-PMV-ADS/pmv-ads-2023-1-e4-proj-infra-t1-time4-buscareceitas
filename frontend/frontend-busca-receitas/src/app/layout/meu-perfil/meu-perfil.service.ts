import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpErrorResponse, HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeuPerfilService {

  constructor(private http: HttpClient) { }

  httpOptions= {​​​​​​​​
    headers:new HttpHeaders({​​​​​​​​'Content-Type':'application/json',}​​​​​​​​)
   }
   
  public realizeEditar(model: any): Observable<any> {
    console.log(model)

    return this.http.put<any>(`${environment.baseApi}/v1/sessions`, {
      id: model._id,
      email: model.email,
      name: model.name,
      password: model.password
    });
  }

  public realizeDeletar(model: any): Observable<any> {
    return this.http.delete<any>(`${environment.baseApi}/v1/sessions/${model}`);
  }

}
