import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpErrorResponse, HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CriaReceitaService {

  constructor(private http: HttpClient) { }

  httpOptions= {​​​​​​​​
    headers:new HttpHeaders({​​​​​​​​'Content-Type':'application/json',}​​​​​​​​)
   }
   
   public realizeRegister(model: any): Observable<any> {
    return this.http.post<any>(`${environment.baseApi}/v1/recipe`, {
      titulo: model.titulo,
      ingredientes: model.ingredientes,
      modoPreparo: model.modoPreparo,
      tempoPreparo: model.tempoPreparo,
      categoria: model.categoria,
      informacoesAdicionais: model.informacoesAdicionais,
      usuarioNome: model.usuarioNome,
      usuarioEmail: model.usuarioEmail,
      rendimento: model.rendimento,
      tipoComida: model.tipoComida,
      link: model.link,
    });
  }
  
}
