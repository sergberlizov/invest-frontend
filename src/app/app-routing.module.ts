import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'compare-instruments',
    loadChildren: () => import('./modules/compare-instruments/compare-instruments.module').then(m => m.CompareInstrumentsModule)
  },
  {
    path: 'compare-strategies',
    loadChildren: () => import('./modules/compare-strategies/compare-strategies.module').then(m => m.CompareStrategiesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
