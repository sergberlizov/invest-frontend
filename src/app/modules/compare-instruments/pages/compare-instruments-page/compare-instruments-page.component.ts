import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {AssetService} from "../../../core/assets/asset.service";
import {Asset, CompareAssetsResponse} from "../../../core/assets/asset";
import {CompareInstrumentsChartSelectorDirective} from "../../components/compare-instruments-chart/compare-instruments-chart-selector.directive";
import {CompareInstrumentsChartComponent} from "../../components/compare-instruments-chart/compare-instruments-chart.component";
import {ChartTypeEnum} from "../../models/chart-type.enum";

@Component({
  templateUrl: './compare-instruments-page.component.html',
  styleUrls: ['./compare-instruments-page.component.scss']
})
export class CompareInstrumentsPageComponent implements OnInit {

  instrumentsList: Asset[] = []
  chartTypes = ChartTypeEnum

  winsChartData:any = [];
  yieldChartData:any = [];
  instrument1Control: FormControl = new FormControl()
  instrument2Control: FormControl = new FormControl()
  startDateControl: FormControl = new FormControl()
  maxIntervalYearsControl: FormControl = new FormControl()


  ngOnInit() {
    this.loadAssets();
    this.subscribeToChanges();
  }

  constructor(private assetService: AssetService) {}

  private loadAssets()
  {
    this.assetService.getAssets()
      .subscribe((data: Asset[]) => {
        this.instrumentsList = data;
        this.instrument1Control.setValue(this.instrumentsList[0].type)
        this.instrument2Control.setValue(this.instrumentsList[0].type)
      })
  }

  private onAssetDropdownChange()
  {
    if (
      !this.instrument1Control.value
      || !this.instrument2Control.value
      || this.instrument1Control.value === this.instrument2Control.value
    ) {
      return;
    }
    this.assetService.compareAssets(this.instrument1Control.value, this.instrument2Control.value).subscribe(
      (data:CompareAssetsResponse) => {
        this.winsChartData = data.wins;


        this.yieldChartData = data.medianYield;
      }
    )
  }

  private onDateChange()
  {
    if (!this.startDateControl.value) {
      return;
    }
    console.log(this.startDateControl.value);
  }

  private subscribeToChanges() {
    this.instrument1Control.valueChanges.subscribe(value => {
      this.onAssetDropdownChange();

    });
    this.instrument2Control.valueChanges.subscribe(value => {
      this.onAssetDropdownChange();
    });
    this.startDateControl.valueChanges.subscribe(value => {
      this.onDateChange();
    });
  }

}
