import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './layout/login/login.component';
import { GerenciarReceitasComponent } from './layout/gerenciar-receitas/gerenciar-receitas.component';
import { BuscarReceitasComponent } from './layout/buscar-receitas/buscar-receitas.component';
import { MeuPerfilComponent } from './layout/meu-perfil/meu-perfil.component';
import { MinhasReceitasComponent } from './layout/minhas-receitas/minhas-receitas.component';
import { RegistroComponent } from './layout/registro/registro.component';
import { ResultadosBuscaComponent } from './layout/resultados-busca/resultados-busca.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { LoaderComponent } from './components/loader/loader.component';
import { LoaderInterceptor } from './components/loader/loader.interceptor';
import { LoaderService } from './components/loader/loader.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GerenciarReceitasComponent,
    BuscarReceitasComponent,
    MeuPerfilComponent,
    MinhasReceitasComponent,
    RegistroComponent,
    ResultadosBuscaComponent
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
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
