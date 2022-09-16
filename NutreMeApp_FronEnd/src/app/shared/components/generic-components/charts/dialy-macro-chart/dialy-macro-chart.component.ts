import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserDataFacadeService } from '@ngrx/ngrx-shared';
import { Subject, takeUntil } from 'rxjs';
import { Macronutrients } from 'src/app/shared/models/macronutrients.model';

@Component({
  selector: 'dialy-macro-chart',
  templateUrl: './dialy-macro-chart.component.html',
  styleUrls: ['./dialy-macro-chart.component.scss']
})
export class DialyMacroChartComponent implements OnInit, OnDestroy {
  private repose: boolean = false; 
  public macroNutrientsLimits : Macronutrients = {
    carbohydrates: 0,
    proteins: 0,
    fats: 0
  }; 
  public macroNutrientsFacts: Macronutrients; 
  constructor( private userDataFacadeService: UserDataFacadeService) { }
  private destroySuscriptions$: Subject<any> = new Subject()


  ngOnInit(): void {
    this.userDataFacadeService.userMacronutriensData$(this.repose).pipe(takeUntil(this.destroySuscriptions$)).subscribe( (macronutriens: Macronutrients) => {
      debugger; 
      if(macronutriens){
        this.macroNutrientsLimits = macronutriens; 
      }
    })
  }

  ngOnDestroy(): void {
    this.destroySuscriptions$.next({})
     this.destroySuscriptions$.unsubscribe()
}

}
