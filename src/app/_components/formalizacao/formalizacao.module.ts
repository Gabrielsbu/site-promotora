import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormalizacaoRoutingModule } from './formalizacao-routing.module';
import { FormalizacaoComponent } from './formalizacao.component';


@NgModule({
  declarations: [FormalizacaoComponent],
  imports: [
    CommonModule,
    FormalizacaoRoutingModule
  ]
})
export class FormalizacaoModule { }
