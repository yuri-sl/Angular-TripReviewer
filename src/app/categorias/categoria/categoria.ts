import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.html',
  styleUrl: './categoria.scss',
})
export class Categoria {
  criarCategoriaForm!: FormGroup;
  constructor(
    private fb:FormBuilder
  ){
    /*
    this.categoriaForm = new FormGroup({
      nome: new FormControl('',Validators.required),
      descricao: new FormControl('',Validators.required)
    })
    */
    this.criarCategoriaForm = fb.group({
      nome:['',Validators.required,Validators.maxLength(100)],
      descricao:['',Validators.required]
    })
  }

  onSubmit(){
    this.criarCategoriaForm.markAllAsTouched();
    if(this.criarCategoriaForm.valid){
      console.log('Valores digitados: '+this.criarCategoriaForm.value);
    }

    console.log(this.criarCategoriaForm.value);
    console.log('Is valid?',this.criarCategoriaForm.valid);
  }

  isCampoInvalido(nomeCampo:string):boolean{
    const campo = this.criarCategoriaForm.get(nomeCampo);
    return campo?.invalid && campo?.touched && campo?.errors?.['required'];

  }

}
