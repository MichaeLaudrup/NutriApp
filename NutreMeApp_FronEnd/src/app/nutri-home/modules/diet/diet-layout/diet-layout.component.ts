import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DailyMealsRegisterFacade } from '@ngrx/ngrx-diet';
import { DailyMealsRegister } from '@shared/models';
import { takeUntil } from 'rxjs';
import { Subject } from 'rxjs';
import { toDateInputValue } from 'src/app/shared/utils/convertions.utils';

@Component({
  selector: 'app-diet-layout',
  templateUrl: './diet-layout.component.html',
  styleUrls: ['./diet-layout.component.scss']
})
export class DietLayoutComponent implements OnInit, OnDestroy {
  dailyNutritionalAnalisysForm: FormGroup;  
  scheduledMeals : string[] = ['Desayuno', 'Almuerzo']
  private destroySuscriptions$: Subject<any> = new Subject()
  dailyMealsRegister: DailyMealsRegister; 
  constructor(private dailyMealsRegisterFacade: DailyMealsRegisterFacade) { }

  ngOnInit(): void {
    this.dailyMealsRegisterFacade.requestDailyMealsRegister(new Date());
    this.dailyMealsRegisterFacade.DailyMealsRegister$.pipe(takeUntil(this.destroySuscriptions$)).subscribe( dailyMealsRegister => {
      this.dailyMealsRegister = dailyMealsRegister; 
      dailyMealsRegister.scheduledMeals
    })
    this.dailyNutritionalAnalisysForm = new FormGroup({
      date: new FormControl(toDateInputValue.bind(this)(), Validators.required)
    })

  }

  ngOnDestroy(): void {
    this.destroySuscriptions$.next({})
    this.destroySuscriptions$.unsubscribe()
}

}
