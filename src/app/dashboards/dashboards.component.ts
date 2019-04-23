import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { BaseChartDirective, Label } from 'ng2-charts';
import { DashboardService } from '../servicios/subscription/dashboard.service';
import { QueryRef } from 'apollo-angular';
import { Subscription } from 'rxjs';
import gql from 'graphql-tag';

const subscription = gql`
  subscription {
    dashboardsRealtime 
  }
`;

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [], backgroundColor: 'lightblue', hoverBackgroundColor: 'lightblue' }
  ];
  public lineChartLabels: Label[] = [];
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
  infoQuery: QueryRef<any>;
  infoSubscription: Subscription;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  @Input() cotizacionId = null;

  constructor(private dashboardServices: DashboardService) { }

  ngOnInit() {
    this.infoQuery = this.dashboardServices.dashboardInfo(this.cotizacionId);

    this.infoSubscription = this.infoQuery.valueChanges.subscribe(({ data }) => {
      this.lineChartData[0].data = data.getProposalsDashboard.propuestasAceptadas;
      this.lineChartLabels = data.getProposalsDashboard.proveedores;
      this.chart.update();
    });

    this.setupSubscription();
  }

  setupSubscription() {
    this.infoQuery.subscribeToMore({
      document: subscription,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;

        const updateProv = subscriptionData.data.dashboardsRealtime;
        const index = this.lineChartLabels.findIndex((label) => label === updateProv);
        if(index >= 0) {
          this.lineChartData[0].data[index] = +this.lineChartData[0].data[index] + 1;
        } else {
          const newData = Object.assign([], this.lineChartData[0].data);
          newData.push(1);
          this.lineChartData[0].data = newData;
          this.lineChartLabels.push(updateProv);
        }
        return subscriptionData.data.dashboardsRealtime
      }
    })
  }
}
