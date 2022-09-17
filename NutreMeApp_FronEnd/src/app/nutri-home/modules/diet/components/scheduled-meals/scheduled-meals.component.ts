import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { DailyMealsRegisterFacade } from '@ngrx/ngrx-diet';
import { mealTag } from '@shared/enums';
import { Aliment, ScheduledMeals } from '@shared/models';
import { expandedAnimation } from 'src/app/shared/animations/animation';
import { Macronutrients } from 'src/app/shared/models/macronutrients.model';

@Component({
  selector: 'scheduled-meals',
  templateUrl: './scheduled-meals.component.html',
  styleUrls: ['./scheduled-meals.component.scss'],
  animations: [expandedAnimation]
})
export class ScheduledMealsComponent implements OnInit {
  @Input('scheduled-title') mealName: string = 'Desayuno';
  @Input('index') index: number;  
  @Input() mealsScheduled : ScheduledMeals;
  @Input() nutriAccounts: Macronutrients; 
  @Input() totalKcal : number; 
  constructor() { }

  ngOnInit(): void {
    this.nutriAccounts = this.mealsScheduled.totalMacronutrients;
  }

}
