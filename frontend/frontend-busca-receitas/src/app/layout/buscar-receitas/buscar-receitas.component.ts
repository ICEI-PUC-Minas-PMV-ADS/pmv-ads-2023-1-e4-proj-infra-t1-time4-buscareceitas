import { Component } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'
import { BuscaReceitasService } from './busca-receitas.service';

export class BuscaModel {
  ingredientes: string;
  tempoPreparo: number;
  tipoComida: string;

  constructor() {
    this.ingredientes = "";
    this.tempoPreparo = 60;
    this.tipoComida = "";
  }
}
@Component({
  selector: 'app-buscar-receitas',
  templateUrl: './buscar-receitas.component.html',
  styleUrls: ['./buscar-receitas.component.css']
})

export class BuscarReceitasComponent {
  model: BuscaModel = new BuscaModel();

  constructor(private buscaReceitasService: BuscaReceitasService, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {}

  realizeSearch() {
    console.log(this.model);

    localStorage.setItem('filter', JSON.stringify(this.model));

    this.toastrService.success('Busca realizada com sucesso!');
    this.router.navigate(['/resultados']);
    
  }
}
