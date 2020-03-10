import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SejaParceiroRoutingModule } from './seja-parceiro-routing.module';
import { SejaParceiroComponent } from './seja-parceiro.component';
import { ContatosUtilitariosModule } from 'src/app/_utilities/contatos-utilitarios/contatos-utilitarios.module';
import { ProdutosUtilitariosModule } from '../../_utilities/produtos-utilitarios/produtos-utilitarios.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SejaParceiroComponent],
  imports: [
    CommonModule,
    SejaParceiroRoutingModule,
    ContatosUtilitariosModule,
    ProdutosUtilitariosModule,
    ReactiveFormsModule
  ]
})
export class SejaParceiroModule { }
