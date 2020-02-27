import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormalizacaoComponent } from './formalizacao.component';

const routes: Routes = [
  {path: '',
  component: FormalizacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormalizacaoRoutingModule { }
