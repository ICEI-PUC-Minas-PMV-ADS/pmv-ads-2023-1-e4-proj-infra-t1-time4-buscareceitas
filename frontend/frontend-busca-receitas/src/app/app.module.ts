import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './layout/login/login.component';
import { GerenciarReceitasComponent } from './layout/gerenciar-receitas/gerenciar-receitas.component';
import { BuscarReceitasComponent } from './layout/buscar-receitas/buscar-receitas.component';
import { MeuPerfilComponent } from './layout/meu-perfil/meu-perfil.component';
import { RegistroComponent } from './layout/registro/registro.component';
import { ResultadosBuscaComponent } from './layout/resultados-busca/resultados-busca.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule, ɵHttpInterceptingHandler } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CriaReceitaComponent } from './layout/cria-receita/cria-receita.component';
import { AtualizaReceitaComponent } from './layout/atualiza-receita/atualiza-receita.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GerenciarReceitasComponent,
    BuscarReceitasComponent,
    MeuPerfilComponent,
    RegistroComponent,
    ResultadosBuscaComponent,
    CriaReceitaComponent,
    AtualizaReceitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot({
      timeOut: 4000,
    }),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [


  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
