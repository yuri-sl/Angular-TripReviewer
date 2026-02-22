import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LayourProps } from './layoutprops';
import { filter,map } from 'rxjs';
import { Authgoogle } from '../../authgoogle';
@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout implements OnInit {
  constructor(private router:Router,
    private activatedRoute:ActivatedRoute,
    private loginService:Authgoogle
  ){
  }
  baseUrl:string = 'http://localhost:4200/paginas/';

  redirecionarCategorias(){
    let path:string = this.baseUrl+'categorias';
    this.router.navigate([path]);
  }

  props:LayourProps = {
    tituloPagina:'',subtituloPagina:''
  }
  ngOnInit(): void {
    this.router.events.pipe(
      filter(() => this.activatedRoute.firstChild != null),
      map( () => this.extractDataFromRoute())
    ).subscribe((props:LayourProps)=> this.props = props)
    
  }

  extractDataFromRoute():LayourProps{
    let rotaFilha = this.activatedRoute.firstChild;

    while(rotaFilha?.firstChild){
      rotaFilha = rotaFilha.firstChild;
    }
    //Captura o objeto data e seta ele Layoutprops
    return rotaFilha?.snapshot.data as LayourProps;

  }
  logout(){
    this.loginService.logout();
  }

}
