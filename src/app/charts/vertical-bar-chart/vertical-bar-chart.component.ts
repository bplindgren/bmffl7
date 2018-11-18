import { Component, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { single } from '../../data';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.css']
})
export class VerticalBarChartComponent implements OnInit, OnChanges {
  @Input() data: Object[];
  @Input() yAxis: string;
  private single: any[];

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: { yAxes: [{ ticks: { beginAtZero: true } }] }
  }

  public barChartLabels: string[] = [];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  private barChartData: any[] = [{}]

  ngOnInit() {
    let chartLabels = this.data.map(object => object.name)
    this.barChartLabels = chartLabels;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      let values = changes['data']['currentValue'].map(object => object.value);
      let newData : Object = {
        data: values,
        label: this.yAxis
      }
      this.barChartData = [newData];
    }
  }

}
