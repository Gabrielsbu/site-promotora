import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConhecaF5RoutingModule } from './conheca-f5-routing.module';
import { ConhecaF5Component } from './conheca-f5.component';
import { MapeandoSvgBrasilModule } from './../../_utilities/mapeando-svg-brasil/mapeando-svg-brasil.module';
import { ContatosUtilitariosModule } from 'src/app/_utilities/contatos-utilitarios/contatos-utilitarios.module';



@NgModule({
  declarations: [ConhecaF5Component],
  imports: [
    CommonModule,
    ConhecaF5RoutingModule,
    MapeandoSvgBrasilModule,
    ContatosUtilitariosModule,
  ]
})
export class ConhecaF5Module { }
