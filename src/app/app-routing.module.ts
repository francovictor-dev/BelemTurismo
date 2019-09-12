import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'hoteis',
    loadChildren: () => import('./hoteis/hoteis.module').then(m => m.HoteisPageModule)
  },
  {
    path: 'restaurantes',
    loadChildren: () => import('./restaurantes/restaurantes.module').then(m => m.RestaurantesPageModule)
  },
  {
    path: 'pontos-turisticos',
    loadChildren: () => import('./pontos-turisticos/pontos-turisticos.module').then(m => m.PontosTuristicosPageModule)
  },
  {
    path: 'praias',
    loadChildren: () => import('./praias/praias.module').then(m => m.PraiasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
