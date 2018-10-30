import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { single } from '../../data';

@Component({
  selector: 'vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.css']
})
export class VerticalBarChartComponent implements OnInit {
  @Input() data: Object[];
  @Input() yAxis: string;
  private single: any[];

  view: any[] = [500, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = "year"
  showYAxisLabel = "true";
  yAxisLabel = "";

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single })
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.single = this.data
      this.yAxisLabel = this.yAxis;
    }
  }

}
