import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { CategoriaClass } from '../../categorias/categoria/categoria-class';
import { CategoriaService } from '../../categorias/categoria.service';
import { LugarService } from '../lugar.service';

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
    private categoriaService:CategoriaService,
    private lugarService:LugarService
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
    return this.criarLugarForm.get(campo)?.invalid && this.criarLugarForm.get(campo)?.touched;      
  }
  onSubmit(){
    console.log(this.criarLugarForm.value);
    if(this.criarLugarForm.valid){
      console.log("Campos enviados: "+this.criarLugarForm.value);
      this.salvarLugar();
    }
  }
  ngOnInit(): void {
    this.buscarCategoriasCadastradas();
  }
  salvarLugar(){
    console.log("Salvando");
    this.lugarService.cadastrarNovoLugar(this.criarLugarForm.value).subscribe({
      next:(res) => console.log(res),
      error:(err) => console.error(err)
    })
    this.criarLugarForm.reset();
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
