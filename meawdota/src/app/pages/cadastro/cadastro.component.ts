
import { Component, OnInit } from '@angular/core';
import { Cadastro } from 'src/app/cadastro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  product: Cadastro = {
    name: '',
    email: '',
    nasc: '',
    cpf: '',
    cnpj: '',
    zona: 0,
    cep: '',
    n:''
  }
  router: any;

  constructor() { }

  ngOnInit(): void {
  }

  // createProduct(): void {
  //   this.productService.create(this.product).subscribe(() => {
  //     this.productService.showMessage('Produto criado!')
  //     this.router.navigate(['/products'])
  //   })
  // }

  cancel(): void {
    this.router.navigate(['home'])
  }

}
