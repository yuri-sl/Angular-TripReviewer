import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateModule } from './template/template-module';
import { Landingpage } from './landingpage/landingpage';

const routes: Routes = [
  {
    path:'paginas',
    loadChildren: () => import('./template/template-module').then(m => m.TemplateModule)
  },
  {
    path:'',
    component:Landingpage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
