import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AtualizaReceitaService } from './atualiza-receita.service';

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
  selector: 'app-atualiza-receita',
  templateUrl: './atualiza-receita.component.html',
  styleUrls: ['./atualiza-receita.component.css']
})
export class AtualizaReceitaComponent {
  model: ReceitaModel = new ReceitaModel();

  constructor(private atualizaReceitaService: AtualizaReceitaService, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.model = JSON.parse(localStorage.getItem('editarReceita') || '{}');
  }

  editarRecipe() {
    console.log(this.model);
    this.atualizaReceitaService.realizeEdit(this.model).subscribe((r: any) => {
      this.toastrService.success('edicao da receita realizado com sucesso!');
      this.router.navigate(['/gerenciar-receitas']);
    }, (err: any) => {
      console.log(err);
      this.toastrService.error(err.error, 'Ocorreu um erro ao realizar o edicao da receita!');
    });

  }
}
