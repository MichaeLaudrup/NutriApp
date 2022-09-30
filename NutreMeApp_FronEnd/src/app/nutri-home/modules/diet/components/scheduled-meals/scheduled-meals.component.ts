import { Component, HostBinding, Input, OnInit, Output, EventEmitter  } from '@angular/core';
import { mealTag } from '@shared/enums';
import { Aliment, ScheduledMeals } from '@shared/models';
import { Subject, take, takeUntil } from 'rxjs';
import { RecommendationsFacade } from 'src/app/ngrx-store-modules/ngrx-recommendations/+recomendations/recommendations.facade';
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
  @Output() alimentFromDoneToUndone: EventEmitter<{ meal: Aliment, numPosition: number}> = new EventEmitter(); 
  @Output() alimentFromUndoneToDone: EventEmitter<{ meal: Aliment, numPosition: number}> = new EventEmitter(); 
  recomendations: Aliment[] = []
  private destroySuscriptions$: Subject<any> = new Subject()

  constructor(
    private recommendationsFacade: RecommendationsFacade
  ) { }

  ngOnInit(): void {
    this.nutriAccounts = this.mealsScheduled.totalMacronutrients;
    this.totalKcal = this.mealsScheduled.totalKcal; 
  }

  ngOnDestroy(): void {
    this.destroySuscriptions$.next({})
     this.destroySuscriptions$.unsubscribe()
}

  processMarkedAsDone(meal: Aliment, numPosition: number){
    this.recomendations.splice(numPosition, 1)
    this.alimentFromUndoneToDone.emit({meal, numPosition})
  }

  processMarkedAsUndone(meal: Aliment, numPosition: number){
    this.recomendations.push(meal)
    this.alimentFromDoneToUndone.emit({meal, numPosition })
  }
  
  requestRecommendation(typeOfRecommendation : string){
    this.recommendationsFacade.requestRecomendation(typeOfRecommendation); 
  }


  

}
