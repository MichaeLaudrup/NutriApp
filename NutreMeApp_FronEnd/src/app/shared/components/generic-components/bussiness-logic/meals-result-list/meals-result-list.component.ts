import { Component, OnDestroy, OnInit } from '@angular/core';
import { MealsFacade } from '@ngrx/ngrx-meals';
import { Aliment } from '@shared/models';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'meals-result-list',
  templateUrl: './meals-result-list.component.html',
  styleUrls: ['./meals-result-list.component.scss'],
  providers: [ MealsFacade]
})
export class MealsResultListComponent implements OnInit, OnDestroy {
  private destroySuscriptions$: Subject<any> = new Subject()
  meals : Aliment[]; 
  actualItemSelected: number = -1; 
  constructor(private mealsFacadeService: MealsFacade) { }

  ngOnInit(): void {
    this.mealsFacadeService.getMeals(); 
    this.mealsFacadeService.meals$.pipe(takeUntil(this.destroySuscriptions$)).subscribe((meals) => {
      this.meals = meals; 
    }); 
  }

  ngOnDestroy(): void {
    this.destroySuscriptions$.next({})
     this.destroySuscriptions$.unsubscribe()
}

  searchMealsWithQuery($event){
    this.mealsFacadeService.searchMealsWithFieldsAndValue(['name[regex]'],[$event]); 
  }

}
