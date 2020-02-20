import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ContatosUtilitariosModule } from 'src/app/_utilities/contatos-utilitarios/contatos-utilitarios.module';
import { MapeandoSvgBrasilModule } from './../../_utilities/mapeando-svg-brasil/mapeando-svg-brasil.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ContatosUtilitariosModule,
    MapeandoSvgBrasilModule
  ]
})
export class HomeModule { }
