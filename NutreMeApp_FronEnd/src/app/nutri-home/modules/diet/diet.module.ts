import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DietRoutingModule } from './diet-routing.module';
import { DietLayoutComponent } from './diet-layout/diet-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ScheduledMealsComponent } from './components/scheduled-meals/scheduled-meals.component';


@NgModule({
  declarations: [
    DietLayoutComponent,
    ScheduledMealsComponent
  ],
  imports: [
    CommonModule,
    DietRoutingModule,
    SharedModule
  ]
})
export class DietModule { }