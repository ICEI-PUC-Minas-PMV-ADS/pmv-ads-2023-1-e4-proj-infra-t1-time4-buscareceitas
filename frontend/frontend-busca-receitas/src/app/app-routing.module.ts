import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { LoginComponent } from './layout/login/login.component';
import { RegistroComponent } from './layout/registro/registro.component';
import { BuscarReceitasComponent } from './layout/buscar-receitas/buscar-receitas.component';
const routes: Routes = [

  {
      path: '',
      component: AppComponent,
      children: [
          { path: 'login', component: LoginComponent },
          { path: 'registro', component: RegistroComponent },
          { path: 'busca', component: BuscarReceitasComponent }

      ]
  },
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
