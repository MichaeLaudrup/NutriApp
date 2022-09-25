import { Component, OnDestroy, OnInit } from "@angular/core";
import { UserInterfaceService } from "@core/services";
import { DeviceMode } from "@shared/enums";
import * as HighCharts from 'highcharts'
import { Subject, takeUntil } from "rxjs";
@Component({
	selector: "app-basic-line-chart",
	templateUrl: "./basic-line-chart.component.html",
	styleUrls: ["./basic-line-chart.component.scss"]
})
export class BasicLineChartComponent implements OnInit {
	chartOptions = { };
	Highcharts = HighCharts;  
	deviceMode: DeviceMode; 
	DeviceMode = DeviceMode; 
	constructor() {
	}


	ngOnInit(){
		this.calcChart(); 

	}

	calcChart() {
		this.chartOptions = {
			chart: {
				backgroundColor: 'var(--elements-bg-secondary)',
			},
			title: {
				text: ""
			},

			subtitle: {
				text: ""
			},

			yAxis: {
				min: 2500,
				title: {
					text: "",
					style: {
						color: 'var(--text-generic-color)'
					}
				},

				labels: {
					style: {
						color: 'var(--text-generic-color)'
					}
				}
			},

			xAxis: {
				lineColor: '#96f2d7',
				categories: ['Mon','Thu','Wed','Tue','Fri','Sat','Sun'],
				gridLineWidth: 0,

				labels: {
					formatter: function() {
						return this.value;
					},
					style: {
						color: 'var(--text-generic-color)'
					}
				},
			},

			legend: {
				align: "center",
				verticalAlign: "bottom",
				x:0,
				y:0,
				itemStyle: {
					color: 'var(--text-generic-color)'
				}
			},

			plotOptions: {
			},

			series: [{
				name: "Kilo calorías objetivo",
				data: [3097, 3097, 3097, 3097, 3097, 3097, 3097],
				color: 'var(--chart-color03)'
			}, {
				name: "Kilo calorías consumidas",
				data: [2800, 3200, 2959, 3097, 2500, 3097, 3000],
				color: 'var(--chart-color01)'
			}
			],

			responsive: {
				rules: [{
					condition: {
						maxWidth: 2000
					},
					chartOptions: {
						legend: {
							layout: "horizontal",
							align: "center",
							verticalAlign: "bottom"
						}
					}
				}]
			}

		};
	}
}

		

