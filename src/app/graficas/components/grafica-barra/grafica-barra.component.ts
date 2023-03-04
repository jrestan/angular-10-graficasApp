import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input() horizontal: boolean = false;

  @Input() barChartData!: ChartData<'bar'>; 
  
  constructor() { }

  ngOnInit(): void {
    if (this.horizontal){
      //Esto muestra la gráfica en sentido horizontal y todos los datos en ese sentido.
      this.barChartOptions!.indexAxis = 'y';
      this.barChartOptions!.scales!["y"]!.min = 0;
    }
  }
  
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };

  public barChartType: ChartType = 'bar'; //'bar';
  public barChartPlugins = [ DataLabelsPlugin ];

  // events
  public chartClicked({ event, active }: {event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }
  
  public chartHovered({ event, active }: {event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }
  
  /*
  //Va como un @Input en la parte de arriba
  public barChartData: ChartData<'bar'> = {
    labels: [ '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40, 60 ], label: 'Series A', backgroundColor: '#F50872', hoverBackgroundColor: '#F55AAE' },
      { data: [ 28, 48, 40, 19, 86, 27, 90, 80 ], label: 'Series B', backgroundColor: '#1D1DE0', hoverBackgroundColor: '#4F4FE0' },
      { data: [ 70, 40, 35, 99, 80, 90, 100, 150 ], label: 'Series G', backgroundColor: '#F58345', hoverBackgroundColor: '#FA5B4F', borderColor: '#000000', hoverBorderColor: '#000000' }
    ]
  };*/

  
    
}
