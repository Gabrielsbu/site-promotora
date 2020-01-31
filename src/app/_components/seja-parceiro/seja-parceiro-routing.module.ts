import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SejaParceiroComponent } from './seja-parceiro.component';


const routes: Routes = [
  {path: '',
  component: SejaParceiroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SejaParceiroRoutingModule { }
