import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponent } from './contato.component';
import { MapeandoSvgBrasilModule } from './../../_utilities/mapeando-svg-brasil/mapeando-svg-brasil.module';


@NgModule({
  declarations: [ContatoComponent],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    MapeandoSvgBrasilModule,

  ]
})
export class ContatoModule { }
