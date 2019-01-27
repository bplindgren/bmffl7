import { Component, Input, OnChanges, SimpleChanges, SimpleChange, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@Component({
  selector: 'vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.css']
})
export class VerticalBarChartComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() data: any[];
  @Input() yAxis: string;
  @ViewChild("chart") chart: ElementRef;
  private initialized: boolean = false;

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
    let chartLabels = this.data
      .map(object => object['name'])
      .filter(label => label !== '2019');
    this.barChartLabels = chartLabels;
  }

  updateLabels(changes: SimpleChanges) {
    let newLabels = this.data.map(object => object['name']);
    this.barChartLabels.length = 0;
    for (let i = newLabels.length - 1; i >= 0; i--) {
      if (newLabels[i] !== '2019') {
        this.barChartLabels.push(newLabels[i]);
      }
    }
    this.barChartLabels.reverse();
  }

  updateData(changes: SimpleChanges) {
    let values = changes['data']['currentValue'].map(object => object.value);
    let newData = {
      data: values,
      label: this.yAxis
    }
    this.barChartData = [newData];
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes['data']) {
      this.updateData(changes);
    }
    if (changes['data'] && this.initialized) {
      this.updateLabels(changes)
    }
    this.initialized = true;
  }

  ngAfterViewInit() {
    console.log(this.chart)
  }

}
