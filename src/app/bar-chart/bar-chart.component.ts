import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  public barChart: any;

  data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  createChart() {
    this.barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: this.data.map((row) => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: this.data.map((row) => row.count),
          },
        ],
      },
    });
  }
}
