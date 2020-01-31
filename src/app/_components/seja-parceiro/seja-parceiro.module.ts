import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SejaParceiroRoutingModule } from './seja-parceiro-routing.module';
import { SejaParceiroComponent } from './seja-parceiro.component';
import { ContatosUtilitariosModule } from 'src/app/_utilities/contatos-utilitarios/contatos-utilitarios.module';


@NgModule({
  declarations: [SejaParceiroComponent],
  imports: [
    CommonModule,
    SejaParceiroRoutingModule,
    ContatosUtilitariosModule
  ]
})
export class SejaParceiroModule { }
