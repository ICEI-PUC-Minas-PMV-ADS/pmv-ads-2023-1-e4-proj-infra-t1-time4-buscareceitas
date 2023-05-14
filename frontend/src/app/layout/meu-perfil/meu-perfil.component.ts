import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MeuPerfilService } from './meu-perfil.service';

@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-perfil.component.html',
  styleUrls: ['./meu-perfil.component.css']
})
export class MeuPerfilComponent {


  user = {
    id: '',
    _id: '',
    name: '',
    email: '',
    password: '',
  }

  constructor( private toastrService: ToastrService, private router: Router, private meuPerfilService: MeuPerfilService ) { }

  ngOnInit(): void {

    try{
      this.user = JSON.parse(localStorage.getItem('userInfo') || '');
    }catch{
      this.router.navigate(['/login']);
    }
    console.log(this.user);

  }

  
  realizeEditar() {
    this.meuPerfilService.realizeEditar(this.user).subscribe((r: any) => {
      console.log(r);
      this.toastrService.success('Usuário editado com sucesso!');
      this.router.navigate(['/login']);
    })
  }

  realizeApagar() {
    this.meuPerfilService.realizeDeletar(this.user.email).subscribe((r: any) => {
      try{
        localStorage.removeItem('userInfo');
        this.toastrService.success('Usuário apagado com sucesso!');
      }catch{
        console.log('erro ao apagar localStorage');
      }finally{
        this.router.navigate(['/login']);
      }
    }, (err: any) => {
      this.router.navigate(['/login']);
    })

  }

  realizeLogin() {
  }

  realizeSearch() {

  }
}
