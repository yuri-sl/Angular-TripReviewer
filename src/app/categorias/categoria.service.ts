import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriaClass } from './categoria/categoria-class';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  constructor(
    private http:HttpClient
  ){

  }
  apiUrl:string = environment.apiUrl;
  baseURL:string = this.apiUrl+'/categorias'

  salvarCategoria(categoria:CategoriaClass):Observable<CategoriaClass>{
    return this.http.post<CategoriaClass>(this.baseURL,categoria);
  }
  obterTodasCategorias():Observable<CategoriaClass[]>{
    return this.http.get<CategoriaClass[]>(this.baseURL);
  }
  
}
