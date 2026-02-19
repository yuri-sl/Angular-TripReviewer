import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { CategoriaClass } from '../../categorias/categoria/categoria-class';
import { CategoriaService } from '../../categorias/categoria.service';

@Component({
  selector: 'app-lugar',
  standalone: false,
  templateUrl: './lugar.component.html',
  styleUrl: './lugar.component.scss',
})
export class Lugar implements OnInit{
  criarLugarForm!:FormGroup;
  categorias:CategoriaClass[] = [];



  constructor(private fb:FormBuilder,
    private categoriaService:CategoriaService
  ){
    this.criarLugarForm = fb.group({
      nome:['',Validators.required],
      categoria:['',Validators.required],
      localizacao:['',Validators.required],
      urlFoto:['',Validators.required],
      avaliacao:['',Validators.required],
    })
  }
  isCampoInvalido(campo:string){
    return this.criarLugarForm.get(campo)?.valid;      
  }
  onSubmit(){
    console.log(this.criarLugarForm.value);
    if(this.criarLugarForm.valid){
      console.log("Campos enviados: "+this.criarLugarForm.value);
      this.salvarCategoria();
    }
  }
  ngOnInit(): void {
    this.buscarCategoriasCadastradas();
  }
  salvarCategoria(){
    console.log("Salvando");
  }



  buscarCategoriasCadastradas(){
    this.categoriaService.obterTodasCategorias().subscribe({
      next:(res) => {
        console.log(res)
        this.categorias = res;
      },
      error:(err) => {
        console.error(err)
      }
    })
  }

}
