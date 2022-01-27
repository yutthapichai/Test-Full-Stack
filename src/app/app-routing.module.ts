import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiltersComponent } from './filters/filters.component';
import { HomeComponent } from './home/home.component';
import { PrimeComponent } from './prime/prime.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'filter', component: FiltersComponent },
  { path: 'prime', component: PrimeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
