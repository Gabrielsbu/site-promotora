import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanaisCorporativosRoutingModule } from './canais-corporativos-routing.module';
import { CanaisCorporativosComponent } from './canais-corporativos.component';


@NgModule({
  declarations: [CanaisCorporativosComponent],
  imports: [
    CommonModule,
    CanaisCorporativosRoutingModule
  ]
})
export class CanaisCorporativosModule { }
