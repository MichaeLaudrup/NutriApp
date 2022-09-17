import { Component, OnDestroy, OnInit } from '@angular/core';
import { DailyMealsRegisterFacade } from '@ngrx/ngrx-diet';
import { UserDataFacadeService } from '@ngrx/ngrx-shared';
import { DailyMealsRegister } from '@shared/models';
import { Subject, takeUntil } from 'rxjs';
import { expandedAnimation } from 'src/app/shared/animations/animation';
import { Macronutrients } from 'src/app/shared/models/macronutrients.model';

@Component({
  selector: 'dialy-macro-chart',
  templateUrl: './dialy-macro-chart.component.html',
  styleUrls: ['./dialy-macro-chart.component.scss'],
  animations: [expandedAnimation]
})
export class DialyMacroChartComponent implements OnInit, OnDestroy {
  private repose: boolean = false; 
  public macroNutrientsLimits : Macronutrients = {
    carbohydrates: 0,
    proteins: 0,
    fats: 0
  }; 
  public macroNutrientsFacts: Macronutrients = {
    carbohydrates: 250,
    proteins: 110,
    fats: 10
  }; 

  dailyMealsRegister: DailyMealsRegister; 
  constructor( 
    private userDataFacadeService: UserDataFacadeService,
    private dailyMealsRegisterFacade: DailyMealsRegisterFacade) { }
  private destroySuscriptions$: Subject<any> = new Subject()


  ngOnInit(): void {
    this.userDataFacadeService.userMacronutriensData$(this.repose).pipe(takeUntil(this.destroySuscriptions$)).subscribe( (macronutriens: Macronutrients) => {
      if(macronutriens){
        this.macroNutrientsLimits = macronutriens; 
      }
    })

    this.dailyMealsRegisterFacade.DailyMealsRegister$.pipe(takeUntil(this.destroySuscriptions$)).subscribe((dailyMealsRegister: DailyMealsRegister) => {
      this.dailyMealsRegister = dailyMealsRegister; 
      if(this.dailyMealsRegister?.scheduledMeals?.length > 0){
          this. dailyMealsRegister = new DailyMealsRegister( dailyMealsRegister._id, dailyMealsRegister.date, dailyMealsRegister.scheduledMeals)
      }
    })
  }

  ngOnDestroy(): void {
    this.destroySuscriptions$.next({})
     this.destroySuscriptions$.unsubscribe()
}

}
