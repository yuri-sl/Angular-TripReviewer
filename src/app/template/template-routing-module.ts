import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './layout/layout';

const routes: Routes = [
  {
    path:'',
    component:Layout,
    children: [
      {
        path: 'categorias',
        loadChildren: () => import('../categorias/categorias-module').then(m => m.CategoriasModule),
        pathMatch:'full',
        data:{
          tituloPagina:'Categorias',
          subtituloPagina:'Realize o cadastro de novas categorias'
        }
      },{
        path:'lugares',
        loadChildren: () => import('../lugares/lugares.module').then(m => m.LugaresModule),
        pathMatch:'full',
        data:{
          tituloPagina:'Lugares',
          subtituloPagina:'Realize o cadastro de novos lugares legais'
        }
      },
      {
        path:'galeria',
        loadChildren: () => import('../galeria/galeria.module') .then(m => m.GaleriaModule),
        pathMatch:'full',
        data:{
          tituloPagina:'Galeria de lugares legais',
          subtituloPagina:'Descubra os melhores lugares legais'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
