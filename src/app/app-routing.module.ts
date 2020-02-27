import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: '', loadChildren: () => import('./_components/home/home.module').then(m => m.HomeModule)
  },

  {
    path: 'home', loadChildren: () => import('./_components/home/home.module').then(m => m.HomeModule)
  },

  {
    path: 'contato', loadChildren: () => import('./_components/contato/contato.module').then(m => m.ContatoModule)
  },

  {
    path: 'blog', loadChildren: () => import('./_components/blog/blog.module').then(m => m.BlogModule)
  },

  {
    path: 'conheca-f5', loadChildren: () => import('./_components/conheca-f5/conheca-f5.module').then(m => m.ConhecaF5Module)
  },

  {
    path: 'para-voce', loadChildren: () => import('./_components/para-voce/para-voce.module').then(m => m.ParaVoceModule)
  },

  {
    path: 'produtos', loadChildren: () => import('./_components/produtos/produtos.module').then(m => m.ProdutosModule)
  },

  {
    path: 'parceiro', loadChildren: () => import('./_components/seja-parceiro/seja-parceiro.module').then(m => m.SejaParceiroModule)
  },

  {
    path: 'downloads', loadChildren: () => import('./_components/downloads/downloads.module').then(m => m.DownloadsModule)
  },

  {
    path: 'formalizacao', loadChildren: () => import('./_components/formalizacao/formalizacao.module').then(m => m.FormalizacaoModule)
  },
  {
    path: 'canais-corporativos', loadChildren: () =>
    import('./_components/canais-corporativos/canais-corporativos.module').then(m => m.CanaisCorporativosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
