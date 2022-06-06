import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {CompareInstrumentsRoutingModule} from "./compare-instruments-routing.module";
import {CompareInstrumentsPageComponent} from "./pages/compare-instruments-page/compare-instruments-page.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatListModule} from "@angular/material/list";
import {CompareInstrumentsChartComponent} from "./components/compare-instruments-chart/compare-instruments-chart.component";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {CompareInstrumentsChartSelectorDirective} from "./components/compare-instruments-chart/compare-instruments-chart-selector.directive";



@NgModule({
  declarations: [CompareInstrumentsPageComponent, CompareInstrumentsChartComponent, CompareInstrumentsChartSelectorDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,

    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    NgxChartsModule,
    CompareInstrumentsRoutingModule
  ]
})
export class CompareInstrumentsModule { }
