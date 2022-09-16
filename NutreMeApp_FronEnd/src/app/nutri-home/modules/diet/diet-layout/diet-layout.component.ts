import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DailyMealsRegisterFacade } from '@ngrx/ngrx-diet';
import { toDateInputValue } from 'src/app/shared/utils/convertions.utils';

@Component({
  selector: 'app-diet-layout',
  templateUrl: './diet-layout.component.html',
  styleUrls: ['./diet-layout.component.scss']
})
export class DietLayoutComponent implements OnInit {
  dailyNutritionalAnalisysForm: FormGroup;  
  scheduledMeals : string[] = ['Desayuno', 'Almuerzo']

  constructor(private dailyMealsRegister: DailyMealsRegisterFacade) { }

  ngOnInit(): void {
    this.dailyMealsRegister.requestDailyMealsRegister(new Date());
    this.dailyNutritionalAnalisysForm = new FormGroup({
      date: new FormControl(toDateInputValue.bind(this)(), Validators.required)
    })

  }

}
