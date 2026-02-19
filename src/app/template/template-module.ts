import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing-module';
import { Layout } from './layout/layout';
import { CategoriasModule } from '../categorias/categorias-module';
import { GaleriaModule } from '../galeria/galeria.module';


@NgModule({
  declarations: [
    Layout
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    CategoriasModule,
    GaleriaModule
  ]
})
export class TemplateModule { }
