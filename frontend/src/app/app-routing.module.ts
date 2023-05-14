import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { LoginComponent } from './layout/login/login.component';
import { RegistroComponent } from './layout/registro/registro.component';
import { BuscarReceitasComponent } from './layout/buscar-receitas/buscar-receitas.component';
import { ResultadosBuscaComponent } from './layout/resultados-busca/resultados-busca.component';
import { MeuPerfilComponent } from './layout/meu-perfil/meu-perfil.component';
import { GerenciarReceitasComponent } from './layout/gerenciar-receitas/gerenciar-receitas.component';
import { CriaReceitaComponent } from './layout/cria-receita/cria-receita.component';
import { AtualizaReceitaComponent } from './layout/atualiza-receita/atualiza-receita.component';

const routes: Routes = [

  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registro', component: RegistroComponent },
      { path: 'busca', component: BuscarReceitasComponent, pathMatch: 'full' },
      { path: 'resultados', component: ResultadosBuscaComponent },
      { path: 'gerenciar-receitas', component: GerenciarReceitasComponent },
      { path: 'cadastro-receita', component: CriaReceitaComponent },
      { path: 'atualiza-receita', component: AtualizaReceitaComponent },
      { path: 'perfil', component: MeuPerfilComponent },
    ],
  },
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
