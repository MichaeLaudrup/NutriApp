import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardDataRoutingModule } from './dashboard-data-routing.module';
import { DashboardDataComponent } from './dashboard-data.component';
import { MacronutrientsChartComponent } from './components/macronutrients-chart/macronutrients-chart.component';
import {ChartModule} from 'primeng/chart';
import { SharedModule } from 'src/app/shared/shared.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { BasicLineChartComponent } from './components/basic-line-chart/basic-line-chart.component';
import { MbaChartComponent } from './components/mba-chart/mba-chart.component';
import { ImcChartComponent } from './components/imc-chart/imc-chart.component';

const components = [DashboardDataComponent,  MacronutrientsChartComponent, BasicLineChartComponent, MbaChartComponent, ImcChartComponent,]

@NgModule({
  declarations: [
    components,
  ],
  imports: [
    CommonModule,
    DashboardDataRoutingModule,
    ChartModule,
    SharedModule,
    HighchartsChartModule

  ],
  exports: [components]
})
export class DashboardDataModule { 



  
}
