import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParaVoceRoutingModule } from './para-voce-routing.module';
import { ParaVoceComponent } from './para-voce.component';


@NgModule({
  declarations: [ParaVoceComponent],
  imports: [
    CommonModule,
    ParaVoceRoutingModule
  ]
})
export class ParaVoceModule { }
