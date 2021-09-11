import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CensusListComponent } from './components/census-list/census-list.component';
import { CensusDetailComponent } from './components/census-detail/census-detail.component';
import { RemoveCensusComponent } from './components/remove-census/remove-census.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
