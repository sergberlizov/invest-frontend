import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {CompareStrategiesPageComponent} from "./pages/compare-strategies-page/compare-strategies-page.component";

const CompareStrategiesRoutes: Route[] = [
  { path: '', component: CompareStrategiesPageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(CompareStrategiesRoutes)],
  exports: [RouterModule]
})
export class CompareStrategiesRoutingModule {}
