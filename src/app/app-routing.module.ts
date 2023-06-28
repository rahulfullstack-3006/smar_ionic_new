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
  {
    path: 'smar2',
    loadChildren: () => import('./pages/smar2/smar2.module').then( m => m.Smar2PageModule)
  },
  {
    path: 'deviationdashboard',
    loadChildren: () => import('./pages/deviationdashboard/deviationdashboard.module').then( m => m.DeviationdashboardPageModule)
  },
  // {
  //   path: 'table',
  //   loadChildren: () => import('./pages/table/table.module').then( m => m.TablePageModule)
  // },
  {
    path: 'common-table',
    loadChildren: () => import('./pages/common-table/common-table.module').then( m => m.CommonTablePageModule)
  },
  {
    path: 'rejectedCases',
    loadChildren: () => import('./pages/rejected-cases/rejected-cases.module').then( m => m.RejectedCasesPageModule)
  },
  {
    path: 'l1approvalDashboard',
    loadChildren: () => import('./pages/l1approval-dashboard/l1approval-dashboard.module').then( m => m.L1approvalDashboardPageModule)
  },
  {
    path: 'l2approvalDashboard',
    loadChildren: () => import('./pages/l2approval-dashboard/l2approval-dashboard.module').then( m => m.L2approvalDashboardPageModule)
  },
  {
    path: 'srrejectedcase',
    loadChildren: () => import('./pages/srrejectedcase/srrejectedcase.module').then( m => m.SrrejectedcasePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
