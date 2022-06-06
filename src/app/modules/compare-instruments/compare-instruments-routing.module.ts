import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import {CompareInstrumentsPageComponent} from "./pages/compare-instruments-page/compare-instruments-page.component";

const CompareInstrumentsRoutes: Route[] = [
  { path: '', component: CompareInstrumentsPageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(CompareInstrumentsRoutes)],
  exports: [RouterModule]
})
export class CompareInstrumentsRoutingModule {}
