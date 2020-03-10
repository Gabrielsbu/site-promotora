import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';
import { FuncionalidadesComponent } from './_components/funcionalidades/funcionalidades.component';
import { SubmenuComponent } from './_components/submenu/submenu.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FuncionalidadesComponent,
    SubmenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FontAwesomeModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  exports: [
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
