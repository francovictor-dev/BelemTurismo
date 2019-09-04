import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'categorias',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../categorias/categorias.module').then(m => m.CategoriasPageModule)
          }
        ]
      },
      {
        path: 'sugestoes',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../sugestoes/sugestoes.module').then(m => m.SugestoesPageModule)
          }
        ]
      },
      {
        path: 'eventos',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../eventos/eventos.module').then(m => m.EventosPageModule)
          }
        ]
      },
      {
        path: 'mapa',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../mapa/mapa.module').then(m => m.MapaPageModule)
          }
        ]
      },


      {
        path: '',
        redirectTo: '/categorias/categorias',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/categorias/categorias',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
