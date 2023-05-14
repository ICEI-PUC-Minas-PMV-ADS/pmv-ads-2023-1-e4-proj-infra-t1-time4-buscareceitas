import { Component, OnInit } from '@angular/core';
import { GerenciarReceitasService } from './gerenciar-receitas.service';
import { Router } from '@angular/router';
import { faIdCard, faStickyNote, faInfoCircle, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-gerenciar-receitas',
  templateUrl: './gerenciar-receitas.component.html',
  styleUrls: ['./gerenciar-receitas.component.css']
})
export class GerenciarReceitasComponent implements OnInit{

  faIdCard = faIdCard;
  faStickyNote = faStickyNote;
  faInfo = faInfoCircle;
  faLongArrowAltLeft = faLongArrowAltLeft;

  tableHeader = [
    'id',
    'titulo',
    'ingredientes',
    'modo de preparo',
    'categoria',
    'informações adicionais',
    'tempo de preparo',
    'rendimento',
    'link',
    '',
  ]

  list: any = [];
  emptyRecord = true;
  
  constructor(private gerenciarReceitasService: GerenciarReceitasService,  private router: Router) { }

  ngOnInit(): void {

    let email = JSON.parse(localStorage.getItem('userInfo') || '');

    if(email == '' || email == null || email == undefined){
      this.router.navigate(['/login']);
    }

    this.gerenciarReceitasService.findReceitas(email).subscribe((r: any) => {
      this.list = r;
      console.log(this.list);
      this.emptyRecord = this.list.length == 0 || this.list == null || this.list == undefined;
    }, (err: any) => {
      console.log(err);
    });

  }

  createRecipe(){
    this.router.navigate(['/cadastro-receita']);
  }

  editarReceita(receita: any){
    localStorage.setItem('editarReceita', JSON.stringify(receita));

    this.router.navigate(['/atualiza-receita']);
  }
}
