import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  chart: any;
 
  chartOptions = {
    theme: "light2",
    title:{
      text: "Total Revenue"
    },
    animationEnabled: true,
    subtitles: [{
      text: ""
    }],
    axisY: {
      title: "Temperature (°F)",
      suffix: "°F"
    },
    data: [{
      type: "rangeColumn",
      indexLabel: "{y[#index]}°",
      toolTipContent: "<b>{label}</b><br>Min: {y[0]} °F <br/> Max: {y[1]} °F",
      dataPoints: [
        { label: "Jan", y: [48.5,	68.1] },
        { label: "Feb", y: [50.3,	69.6] },
        { label: "Mar", y: [51.6,	69.8] },
        { label: "Sept", y: [64.6,	83.3] },
        { label: "Oct", y: [59.9,	79.0] },
        { label: "Nov", y: [52.6,	73.2] },
      ]
    }]
  }	

  chartOption = {
	  animationEnabled: true,
	  title:{
		text: ""
	  },
	  data: [{
		type: "doughnut",
		yValueFormatString: "#,###.##'%'",
		indexLabel: "{per}",
		dataPoints: [
		  { y: 15, per: "25%" },
		  { y: 23, per: "25%" },
		  { y: 17, per: "20%" },
		  { y: 12, per: "30%" },
		]
	  }]
	}	


  generateRandomData = () => {
		var y  = 500, dps = [];
		for(var i = 0; i < 500; i++) {
			y += Math.ceil(Math.random() * 10 - 5);
			dps.push({ y: y});
		}
		return dps;
	}
	piechart = {
	  zoomEnabled: true,
	  exportEnabled: true,
	  theme: "light2",
	  title: {
		text: "Income"
	  },
	  data: [{
		type: "line",
		dataPoints: this.generateRandomData()
	  }]
	}

}
