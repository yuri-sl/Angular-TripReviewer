import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Lugar } from './lugar.class';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LugarService {
  constructor(private http:HttpClient){
  }
  apiUrl:string = environment.apiUrl;
  baseURL:string = this.apiUrl+'/'+'lugares';

  cadastrarNovoLugar(cadastroLugarForm:Lugar):Observable<Lugar>{
    return this.http.post<Lugar>(this.baseURL,cadastroLugarForm);
  }
  obterTodosLugares():Observable<Lugar[]>{
    return this.http.get<Lugar[]>(this.baseURL);
  }
  obterLugaresFiltrados(nome:string,categoria:string):Observable<Lugar[]>{
    //query params. http://localhost:3000/lugares?categoria=Praias
    let parametros = new HttpParams();
    if(nome){
      parametros = parametros.set('nome_like',nome)
    }
    if(categoria && categoria !== '-1'){
      parametros = parametros.set('categoria',categoria)
    }


    return this.http.get<Lugar[]>(this.baseURL, {
      params:parametros
    })

  }
  
}
