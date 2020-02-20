import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosUtilitariosComponent } from './produtos-utilitarios.component';

@NgModule({
  declarations: [ProdutosUtilitariosComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProdutosUtilitariosComponent
  ]
})
export class ProdutosUtilitariosModule { }
