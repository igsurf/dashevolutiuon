import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SocketService } from "app/socket.service";
declare let d3: any;

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: [
    '../../../node_modules/nvd3/build/nv.d3.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class DashboardsComponent implements OnInit {

  optionsLinguagens;
  data;
  dataPaises;

  constructor(private socketService: SocketService) {
  }

  ngOnInit() {
    this.socketService.connect();

    var subscription = this.socketService.dadosGraficoLinguagem$.subscribe(
      (value) => {
        this.data = value; // Subscription wont get 
        // anything at this point
      }
    );

    var subscriptionPaises = this.socketService.dadosGraficoPaises$.subscribe(
      (value) => {
        this.dataPaises = value; // Subscription wont get 

        if(this.dataPaises != null)
          geraGraficoPaises(this.dataPaises);
      }
    );

    // Configurações e informaçoes do grafico das linguagens mais utilizadsa
    this.optionsLinguagens = {
      chart: {
        type: 'discreteBarChart',
        height: 450,
        margin: {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function (d) { return d.label; },
        y: function (d) { return d.value; },
        showValues: true,
        valueFormat: function (d) {
          return d3.format(',.0f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'Linguagens'
        },
        yAxis: {
          axisLabel: 'Qtd. Projetos',
          axisLabelDistance: 0
        }
      }
    }
    
    function geraGraficoPaises(dataPaises)
    {
       //Configurando a pizza
    nv.addGraph(function() {
      var chart = nv.models.pieChart()
          .x(function(d) { return d.label })
          .y(function(d) { return d.value })
          .showLabels(true)     //Display pie labels
          .labelThreshold(.05)  //Configure the minimum slice size for labels to show up
          .labelType("percent") //Configure what type of data to show in the label. Can be "key", "value" or "percent"
          .donut(true)          //Turn on Donut mode. Makes pie chart look tasty!
          .donutRatio(0.35)     //Configure how big you want the donut hole size to be.
          ;
          
      // chart.pie.startAngle(function(d) { return d.startAngle/2 -Math.PI/2 })
      // chart.pie.endAngle(function(d) { return d.endAngle/2 -Math.PI/2 });
      chart.pie.labelsOutside(true);
      
      d3.select("#chart2 svg")
          .datum(dataPaises)
          .transition().duration(350)
          .call(chart);
    
      return chart;
    });
    }

    function exampleData() {
      return  [
          { 
            "label": "One",
            "value" : 29.765957771107
          } , 
          { 
            "label": "Two",
            "value" : 0
          } , 
          { 
            "label": "Three",
            "value" : 32.807804682612
          } , 
          { 
            "label": "Four",
            "value" : 196.45946739256
          } , 
          { 
            "label": "Five",
            "value" : 0.19434030906893
          } , 
          { 
            "label": "Six",
            "value" : 98.079782601442
          } , 
          { 
            "label": "Seven",
            "value" : 13.925743130903
          } , 
          { 
            "label": "Eight",
            "value" : 5.1387322875705
          }
        ];
    }

  }

  

}
