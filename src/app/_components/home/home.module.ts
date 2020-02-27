import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ContatosUtilitariosModule } from 'src/app/_utilities/contatos-utilitarios/contatos-utilitarios.module';
import { MapeandoSvgBrasilModule } from './../../_utilities/mapeando-svg-brasil/mapeando-svg-brasil.module';
import { ProdutosUtilitariosModule } from './../../_utilities/produtos-utilitarios/produtos-utilitarios.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ContatosUtilitariosModule,
    MapeandoSvgBrasilModule,
    NgbModule,
    ProdutosUtilitariosModule
  ]
})
export class HomeModule { }
