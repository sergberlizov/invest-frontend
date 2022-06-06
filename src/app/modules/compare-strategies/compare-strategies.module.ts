import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompareStrategiesRoutingModule} from "./compare-strategies-routing.module";
import {CompareStrategiesPageComponent} from "./pages/compare-strategies-page/compare-strategies-page.component";

@NgModule({
  declarations: [CompareStrategiesPageComponent],
  imports: [
    CommonModule,
    CompareStrategiesRoutingModule
  ]
})
export class CompareStrategiesModule { }
