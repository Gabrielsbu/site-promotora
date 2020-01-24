import { BlogComponent } from './_components/blog/blog.component';
import { HomeComponent } from './_components/home/home.component';
import { ContatoComponent } from './_components/contato/contato.component';
import { SejaParceiroComponent } from './_components/seja-parceiro/seja-parceiro.component';
import { ProdutosComponent } from './_components/produtos/produtos.component';
import { ParaVoceComponent } from './_components/para-voce/para-voce.component';
import { PrimeiroCompComponent } from './_components/cp-conhecaf5/primeiro-comp.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'conheca-f5', component: PrimeiroCompComponent},
  {path: 'para-voce', component: ParaVoceComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'seja-parceiro', component: SejaParceiroComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'blog', component: BlogComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
