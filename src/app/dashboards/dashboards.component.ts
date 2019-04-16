import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { BaseChartDirective, Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], backgroundColor: 'lightblue', hoverBackgroundColor: 'lightblue' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    // { data: [180, 48, 77, 90, 100, 27, 40], label: 'Series C'}
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      xAxes: [{}],
      yAxes: [{}]
    },
    annotation: {},
  };
  public lineChartLegend = false;
  public lineChartType = 'bar';

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  constructor() { }

  ngOnInit() {
  }

  public randomize(): void {
    for (let i = 0; i < this.lineChartData.length; i++) {
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        this.lineChartData[i].data[j] = this.generateNumber(i);
      }
    }
    this.chart.update();
  }

  private generateNumber(i: number) {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  public hideOne() {
    const isHidden = this.chart.isDatasetHidden(1);
    this.chart.hideDataset(1, !isHidden);
  }

  public pushOne() {
    this.lineChartData.forEach((x, i) => {
      const num = this.generateNumber(i);
      const data: number[] = x.data as number[];
      data.push(num);
    });
    this.lineChartLabels.push(`Label ${this.lineChartLabels.length}`);
  }

  public changeLabel() {
    this.lineChartLabels[2] = ['1st Line', '2nd Line'];
    // this.chart.update();
  }
}
