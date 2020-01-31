import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConhecaF5RoutingModule } from './conheca-f5-routing.module';
import { ConhecaF5Component } from './conheca-f5.component';


@NgModule({
  declarations: [ConhecaF5Component],
  imports: [
    CommonModule,
    ConhecaF5RoutingModule
  ]
})
export class ConhecaF5Module { }
