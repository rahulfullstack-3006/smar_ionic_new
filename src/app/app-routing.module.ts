import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'smardashboard',
    loadChildren: () => import('./pages/smardashboard/smardashboard.module').then( m => m.SmardashboardPageModule)
  },
  {
    path: 'smar1',
    loadChildren: () => import('./pages/smar1/smar1.module').then( m => m.Smar1PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
