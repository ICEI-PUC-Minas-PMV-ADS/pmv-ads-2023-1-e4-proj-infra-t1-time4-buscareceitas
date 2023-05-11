import { Component } from '@angular/core';
import { RegistroService } from './registro.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


export class RegisterModel {
  email: string;
  name: string;
  password: string;

  constructor() {
    this.email = "";
    this.name = "";
    this.password = "";
  }
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  model: RegisterModel = new RegisterModel();

  constructor(private registerService: RegistroService, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {}

  realizeRegister() {
    console.log("Realizando login");
    console.log(this.model);

    this.registerService.realizeRegister(this.model).subscribe((r: any) => {
      this.toastrService.success('Cadastro realizado com sucesso!');
      this.router.navigate(['/login']);
    }, (err: any) => {
      console.log(err);
      this.toastrService.error(err.error, 'Ocorreu um erro ao realizar o cadastro!');
    });
  }


}
