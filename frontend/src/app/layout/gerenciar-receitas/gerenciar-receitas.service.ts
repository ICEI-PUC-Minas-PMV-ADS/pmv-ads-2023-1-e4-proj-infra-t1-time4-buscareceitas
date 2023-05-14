import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpErrorResponse, HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GerenciarReceitasService {

  constructor(private http: HttpClient) { }

  httpOptions= {​​​​​​​​
    headers:new HttpHeaders({​​​​​​​​'Content-Type':'application/json',}​​​​​​​​)
   }

   buildFilter(filter: any) {
    let paramsFilter = new HttpParams();
    
    filter.email ? paramsFilter = paramsFilter.set('email', filter.email) : paramsFilter = paramsFilter.delete('email');

    return paramsFilter;
  }

   
  findReceitas(model: any) {
    let params = this.buildFilter({ ...model })

    return this.http.get<any>(`${environment.baseApi}/v1/recipe`, {
      params
    });
  }
}
