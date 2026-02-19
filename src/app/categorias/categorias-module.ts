import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing-module';
import { Categoria } from './categoria/categoria';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@NgModule({
  declarations: [
    Categoria
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    ReactiveFormsModule
  ]
})
export class CategoriasModule {
  constructor(
    public fb:FormBuilder
  ){

  }
 }
