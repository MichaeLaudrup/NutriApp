import { Component, Input, OnInit } from '@angular/core';
import { DailyMealsRegisterFacade } from '@ngrx/ngrx-diet';
import { mealTag } from '@shared/enums';
import { Aliment } from '@shared/models';

@Component({
  selector: 'scheduled-meals',
  templateUrl: './scheduled-meals.component.html',
  styleUrls: ['./scheduled-meals.component.scss']
})
export class ScheduledMealsComponent implements OnInit {
  @Input('scheduled-title') mealName: string = 'Desayuno';
  @Input('index') index: number;  
  @Input() mealList: Aliment[] = [];
  constructor() { }

  ngOnInit(): void {
    
  }

}
