import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'double-vertical-bar-chart',
  templateUrl: './double-vertical-bar-chart.component.html',
  styleUrls: ['./double-vertical-bar-chart.component.css']
})
export class DoubleVerticalBarChartComponent implements OnInit, OnChanges {
  @Input() data: any[];
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: { yAxes: [{ ticks: { beginAtZero: true } }] }
  };
  public barChartLabels: string[] = ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'];
  public barChartType: string = 'line';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [];

  ngOnInit() {
    this.barChartData = this.data;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.barChartData = changes['data']['currentValue'];
  }

}
