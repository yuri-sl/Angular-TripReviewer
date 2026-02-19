import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Lugar } from './lugar.class';

@Injectable({
  providedIn: 'root',
})
export class LugarService {
  constructor(private http:HttpClient){
  }
  baseURL:string = 'http://localhost:3000/lugares'

  cadastrarNovoLugar(cadastroLugarForm:Lugar):Observable<Lugar>{
    return this.http.post<Lugar>(this.baseURL,cadastroLugarForm);
  }
  obterTodosLugares():Observable<Lugar[]>{
    return this.http.get<Lugar[]>(this.baseURL);
  }
  
}
