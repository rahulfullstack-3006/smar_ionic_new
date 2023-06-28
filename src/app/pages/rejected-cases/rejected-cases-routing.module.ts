import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RejectedCasesPage } from './rejected-cases.page';

const routes: Routes = [
  {
    path: '',
    component: RejectedCasesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RejectedCasesPageRoutingModule {}
