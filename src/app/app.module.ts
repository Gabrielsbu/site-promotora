import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PrimeiroCompComponent } from './_components/cp-conhecaf5/primeiro-comp.component';
import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';
import { ParaVoceComponent } from './_components/para-voce/para-voce.component';
import { ProdutosComponent } from './_components/produtos/produtos.component';
import { ContatoComponent } from './_components/contato/contato.component';
import { SejaParceiroComponent } from './_components/seja-parceiro/seja-parceiro.component';
import { HomeComponent } from './_components/home/home.component';
import { BlogComponent } from './_components/blog/blog.component';
import { FuncionalidadesComponent } from './_components/funcionalidades/funcionalidades.component';
import { SiderbarComponent } from './_components/siderbar/siderbar.component';
import { SubmenuComponent } from './_components/submenu/submenu.component';
import { IndexComponent } from './_components/index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    PrimeiroCompComponent,
    HeaderComponent,
    FooterComponent,
    ParaVoceComponent,
    ProdutosComponent,
    ContatoComponent,
    SejaParceiroComponent,
    HomeComponent,
    BlogComponent,
    FuncionalidadesComponent,
    SiderbarComponent,
    SubmenuComponent,
    IndexComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
