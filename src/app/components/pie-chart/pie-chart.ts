import { Component } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [NgxEchartsModule],
  templateUrl: './pie-chart.html',
  styleUrls: ['./pie-chart.css']
})
export class PieChart {
  option = {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: 'Total Contracts',
        type: 'pie',
        radius: ['60%', '80%'],      // Donut thickness
        center: ['60%', '20%'],  // center of the chart area
     // Move to bottom (for half-circle)
        startAngle: 180,
        
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 160, name: 'Type A', itemStyle: { color: '#5B6DF3' } },
          { value: 150, name: 'Type B', itemStyle: { color: '#A7B2FC' } },
          { value: 90,  name: 'Type C', itemStyle: { color: '#D6D8FD' } },
          { value: 50,  name: 'Type D', itemStyle: { color: '#ECECFE' } },
          {
            value: 450, 
            name: '',
            itemStyle: { color: 'transparent' },
            
            tooltip: { show: false }
          }
        ]
      }
    ]
  };
}
