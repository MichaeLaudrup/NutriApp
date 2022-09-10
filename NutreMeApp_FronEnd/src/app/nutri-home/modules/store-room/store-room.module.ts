import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoomRoutingModule } from './store-room-routing.module';
import { StoreLayoutComponent } from './store-layout/store-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListMealsComponent } from './components/list-meals/list-meals.component';
import { MealSectionsComponent } from './components/meal-sections/meal-sections.component';
import {  NgrxMealsModule } from '@shared/ngrx-meals';
import { NgRxMealsSectionModule } from 'src/app/shared/store-modules/ngrx-meals-sections/ngrx-meals-sections.module';

import { HighchartsChartModule } from 'highcharts-angular';
import { StoreRoomService } from './services/store-room.service';


@NgModule({
  declarations: [
    StoreLayoutComponent,
    ListMealsComponent,
    MealSectionsComponent
  ],
  imports: [
    CommonModule,
    StoreRoomRoutingModule,
    SharedModule,
    NgrxMealsModule.forRoot(),
    NgRxMealsSectionModule.forRoot(),
    HighchartsChartModule
  ],
  providers: [
    StoreRoomService
  ]
})
export class StoreRoomModule { }
