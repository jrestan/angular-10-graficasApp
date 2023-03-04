import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';

import { ChartData, ChartEvent, ChartType } from 'chart.js';


@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [];       // [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales'];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: []      // [{ data: [ 350, 450, 100 ], backgroundColor: ['#6405F0','#0724E3', '#05A0F0'] }]
  };

  public doughnutChartType: ChartType = 'doughnut';

  
  constructor(private graficasService: GraficasService) { }
  
  ngOnInit(): void {
    /*
    this.graficasService.getUsuariosRedesSociales()
      .subscribe(data=>{
        //console.log(data);
        //const labels = Object.keys( data );
        //const values = Object.values( data );
        //console.log(labels);
        //console.log(values);
        
        //this.doughnutChartLabels = labels;
        //this.doughnutChartData.datasets.push({data:values });
        //this.doughnutChartData.labels = this.doughnutChartLabels;
        // con lo de arriba tambien funciono
        this.doughnutChartData = {
          labels:Object.keys(data),
          datasets:[{data:Object.values(data)}]
        }
      });*/

    this.graficasService.getUsuariosRedesSocialesDonaData()
      /*.subscribe(data=>{            //<== con este nuevo metodo "data" ya contiene los arrays {labels, values} dentro de un objeto
        console.log('data', data);
        console.log('labels', data.labels);
        console.log('values', data.values);
      });*/
      .subscribe(({labels,values})=>{   //<== aqui en lugar de recibir "data" lo desestructuro en las dos variables, cada una recibira su array correspondiente
        //console.log('labels', labels);
        //console.log('values', values);
        this.doughnutChartData = {
          labels: labels,
          datasets:[{data: values}]
        }
      });
  }


}
