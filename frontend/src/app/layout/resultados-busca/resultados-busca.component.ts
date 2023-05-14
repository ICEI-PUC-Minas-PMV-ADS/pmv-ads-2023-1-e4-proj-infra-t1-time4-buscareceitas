import { Component } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'
import { BuscaReceitasService } from '../buscar-receitas/busca-receitas.service';
@Component({
  selector: 'app-resultados-busca',
  templateUrl: './resultados-busca.component.html',
  styleUrls: ['./resultados-busca.component.css']
})
export class ResultadosBuscaComponent {

  list: any = [];

  constructor(private buscaReceitasService: BuscaReceitasService, private toastrService: ToastrService, private router: Router) { }


  ngOnInit(): void {
    
    this.buscaReceitasService.findReceitas(JSON.parse(localStorage.getItem('filter') || '{}')).subscribe((r: any) => {
      this.list = r;
      console.log(this.list);
    }, (err: any) => {
      console.log(err);
    });


  }



}
