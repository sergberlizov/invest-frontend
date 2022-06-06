import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[compareInstrumentsChart]',
})
export class CompareInstrumentsChartSelectorDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
