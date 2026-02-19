import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from '../categoria.service';
import { CategoriaClass } from './categoria-class';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.html',
  styleUrl: './categoria.scss',
})
export class Categoria implements OnInit {
  criarCategoriaForm!: FormGroup;
  listaCategorias!:CategoriaClass[];
  constructor(
    private fb:FormBuilder,
    private categoriaService:CategoriaService
  ){
    /*
    this.categoriaForm = new FormGroup({
      nome: new FormControl('',Validators.required),
      descricao: new FormControl('',Validators.required)
    })
    */
    this.criarCategoriaForm = fb.group({
      nome:['',[Validators.required,Validators.maxLength(100)]],
      descricao:['',Validators.required]
    })
  }
  ngOnInit(): void {
    this.obterTodasCategorias();
  }

  onSubmit(){
    this.criarCategoriaForm.markAllAsTouched();
    if(this.criarCategoriaForm.valid){
      console.log('Valores digitados: '+this.criarCategoriaForm.value);
      this.criarNovaCategoria(this.criarCategoriaForm);
    }

    console.log(this.criarCategoriaForm.value);
    console.log('Is valid?',this.criarCategoriaForm.valid);
  }

  isCampoInvalido(nomeCampo:string):boolean{
    const campo = this.criarCategoriaForm.get(nomeCampo);
    return campo?.invalid && campo?.touched && campo?.errors?.['required'];

  }
  criarNovaCategoria(criarCategoriaForm:FormGroup){
    this.categoriaService.salvarCategoria(criarCategoriaForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.criarCategoriaForm.reset();
      },
      error: (err) => 
        {
          console.error(err)
        }
    });
  }
  obterTodasCategorias(){
    this.categoriaService.obterTodasCategorias().subscribe({
      next:(res) => {
        console.log(res)
        this.listaCategorias = res;
      },
      error:(err) => {
        console.error(err)
      }
    })
  }

}
