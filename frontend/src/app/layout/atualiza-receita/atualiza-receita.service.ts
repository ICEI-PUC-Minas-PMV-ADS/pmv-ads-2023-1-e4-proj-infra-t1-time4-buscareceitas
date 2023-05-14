import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpErrorResponse, HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AtualizaReceitaService {

  constructor(private http: HttpClient) { }

  httpOptions= {​​​​​​​​
    headers:new HttpHeaders({​​​​​​​​'Content-Type':'application/json',}​​​​​​​​)
   }
   
   public realizeEdit(model: any): Observable<any> {
    return this.http.put<any>(`${environment.baseApi}/v1/recipe/${model.id}`, {
      id: model.id,
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
