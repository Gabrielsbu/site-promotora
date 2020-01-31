import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConhecaF5Component } from './conheca-f5.component';


const routes: Routes = [
  {
    path: '',
    component: ConhecaF5Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConhecaF5RoutingModule { }
