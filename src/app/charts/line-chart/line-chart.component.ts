import { Component, Input, OnChanges, SimpleChanges, SimpleChange  } from '@angular/core';
import { single, multi } from '../../data2';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {
  @Input() data: Object[];
  @Input() yAxis: string;
  private single: any[];
  private multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Year';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  constructor() {
    Object.assign(this, { single, multi })
  }

  onSelect(event) {
    console.log(event);
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['data']) {
  //     console.log("changes: ", changes)
  //     this.single = this.data[0];
  //     this.multi = this.data[1];
  //     this.yAxisLabel = this.yAxis;
  //   }
  // }

}
