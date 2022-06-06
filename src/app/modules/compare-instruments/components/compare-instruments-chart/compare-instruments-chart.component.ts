import {Component, OnInit, Input, SimpleChanges, ViewChild} from '@angular/core';
import {BarHorizontal2DComponent, LineChartComponent, Color, LegendPosition, ScaleType} from "@swimlane/ngx-charts";
import {CompareInstrumentsChartSelectorDirective} from "./compare-instruments-chart-selector.directive";
import {ChartTypeEnum} from "../../models/chart-type.enum";

@Component({
  selector: 'compare-instruments-chart',
  templateUrl: './compare-instruments-chart.component.html',
  styleUrls: ['./compare-instruments-chart.component.scss']
})

export class CompareInstrumentsChartComponent implements OnInit {

  @Input() data:any = []
  @Input() type:ChartTypeEnum = ChartTypeEnum.LINE

  @ViewChild(CompareInstrumentsChartSelectorDirective, {static: true}) compareInstrumentsChart!: CompareInstrumentsChartSelectorDirective;


  view:[number, number] = [500, 500];
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  legendPosition: LegendPosition = LegendPosition.Right;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Period length (years)';
  showYAxisLabel: boolean = true;
  xAxisLabel = 'Wins Percentage';

  colorScheme:Color = {
    name:'12',
    group: ScaleType.Ordinal,
    selectable: true,
    domain: ['#5AA454', '#000']
  };
  schemeType:ScaleType = ScaleType.Ordinal
  results: any[] = []
  instance:LineChartComponent|BarHorizontal2DComponent|null = null

  ngOnInit() {
    this.results = this.data;

    const viewContainerRef = this.compareInstrumentsChart.viewContainerRef;
    const component = this.type === ChartTypeEnum.HORIZONTAL_BAR_2D ? BarHorizontal2DComponent : LineChartComponent;
    const componentRef = viewContainerRef.createComponent<LineChartComponent|BarHorizontal2DComponent>(component);
    componentRef.instance.results = this.data;
    componentRef.instance.view = this.view;
    componentRef.instance.scheme = this.colorScheme;
    componentRef.instance.schemeType = this.schemeType;
    componentRef.instance.xAxis = this.showXAxis;
    componentRef.instance.yAxis = this.showYAxis;
    componentRef.instance.legend = this.showLegend;
    componentRef.instance.legendPosition = this.legendPosition;
    componentRef.instance.gradient = this.gradient;
    componentRef.instance.xAxisLabel = this.xAxisLabel;
    componentRef.instance.yAxisLabel = this.yAxisLabel;
    componentRef.instance.update();
    this.instance = componentRef.instance;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.results = changes['data'].currentValue
      if (this.instance) {
        this.instance.results = this.results
        this.instance.update()
      }
    }
  }

}
