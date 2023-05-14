import { Component } from '@angular/core';
import { CriaReceitaService } from './cria-receita.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

export class ReceitaModel {
  titulo: string;
  ingredientes: string;
  modoPreparo: string;
  tempoPreparo: number;
  categoria: string;
  informacoesAdicionais: string;
  usuarioNome: string;
  usuarioEmail: string;
  rendimento: string;
  tipoComida: string;
  link: string;

  constructor() {
    this.titulo = '';
    this.ingredientes = '';
    this.modoPreparo = '';
    this.tempoPreparo = 0;
    this.categoria = '';
    this.informacoesAdicionais = '';
    this.usuarioNome = '';
    this.usuarioEmail = '';
    this.rendimento = '';
    this.tipoComida = '';
    this.link = '';
  }
}


@Component({
  selector: 'app-cria-receita',
  templateUrl: './cria-receita.component.html',
  styleUrls: ['./cria-receita.component.css']
})
export class CriaReceitaComponent {
  model: ReceitaModel = new ReceitaModel();

  constructor(private criaReceitaService: CriaReceitaService, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {}

  createRecipe() {

    let userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');

    this.model.usuarioNome = userInfo.name;
    this.model.usuarioEmail = userInfo.email;

    this.criaReceitaService.realizeRegister(this.model).subscribe((r: any) => {
      this.toastrService.success('Cadastro da receita realizado com sucesso!');
      this.router.navigate(['/gerenciar-receitas']);
    }, (err: any) => {
      console.log(err);
      this.toastrService.error(err.error, 'Ocorreu um erro ao realizar o cadastro da receita!');
    });
  }

}
