import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanaisCorporativosComponent } from './canais-corporativos.component';

const routes: Routes = [
  {path: '',
  component: CanaisCorporativosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanaisCorporativosRoutingModule { }
