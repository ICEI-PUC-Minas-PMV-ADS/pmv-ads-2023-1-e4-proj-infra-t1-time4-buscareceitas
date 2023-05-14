import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpErrorResponse, HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BuscaReceitasService {

  constructor(private http: HttpClient) { }

  httpOptions= {​​​​​​​​
    headers:new HttpHeaders({​​​​​​​​'Content-Type':'application/json',}​​​​​​​​)
   }

   buildFilter(filter: any) {
    let paramsFilter = new HttpParams();

    filter.ingredientes ? paramsFilter = paramsFilter.set('ingredientes', filter.ingredientes) : paramsFilter = paramsFilter.delete('ingredientes');
    filter.tempoPreparo ? paramsFilter = paramsFilter.set('tempoPreparo', filter.tempoPreparo) : paramsFilter = paramsFilter.delete('tempoPreparo');
    filter.categoria ? paramsFilter = paramsFilter.set('categoria', filter.categoria) : paramsFilter = paramsFilter.delete('categoria');

    return paramsFilter;
  }

   
  findReceitas(model: any) {
    let params = this.buildFilter({ ...model })

    return this.http.get<any>(`${environment.baseApi}/v1/recipe`, {
      params
    });
  }
}
