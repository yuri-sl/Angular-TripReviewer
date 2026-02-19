import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  constructor(private router:Router){
  }
  baseUrl:string = 'http://localhost:4200/paginas/';

  redirecionarCategorias(){
    let path:string = this.baseUrl+'categorias';
    this.router.navigate([path]);
  }

}
