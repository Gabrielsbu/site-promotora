import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParaVoceComponent } from './para-voce.component';


const routes: Routes = [
  {path: '',
  component: ParaVoceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParaVoceRoutingModule { }
