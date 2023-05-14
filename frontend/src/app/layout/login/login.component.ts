import { Component, OnInit } from '@angular/core';

import { LoginService } from './login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgOptimizedImage } from '@angular/common'

export class LoginModel {
  email: string;
  password: string;

  constructor() {
    this.email = "";
    this.password = "";
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  model: LoginModel = new LoginModel();

  constructor(private loginService: LoginService, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {}

  realizeLogin() {
    console.log("Realizando login");
    console.log(this.model);

    this.loginService.findLogin(this.model).subscribe((r: any) => {
      console.log(r.userInfo);
      localStorage.setItem('userInfo', JSON.stringify(r.userInfo));
      localStorage.setItem('token', JSON.stringify(r.userToken));
      this.toastrService.success('Login realizado com sucesso!');
      this.router.navigate(['/busca']);
    }, (err: any) => {
      console.log(err);
      this.toastrService.error('Ocorreu um erro ao realizar o login!');
    });
  }
}
