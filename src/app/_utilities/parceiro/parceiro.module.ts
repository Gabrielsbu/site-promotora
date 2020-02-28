import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParceiroComponent } from './parceiro.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ParceiroComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ParceiroComponent
  ]
})
export class ParceiroModule { }
