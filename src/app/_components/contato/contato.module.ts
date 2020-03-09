import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponent } from './contato.component';
import { MapeandoSvgBrasilModule } from './../../_utilities/mapeando-svg-brasil/mapeando-svg-brasil.module';


@NgModule({
  declarations: [ContatoComponent],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    MapeandoSvgBrasilModule,
    ReactiveFormsModule

  ]
})
export class ContatoModule { }
