import { Component, Input, OnInit } from '@angular/core';
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
  @Input() mealList: Aliment[] = [
    {"name":"Yogurt Natural (+Proteinas)","description":"Yogures con alto contenido proteico de hacendado","weight":120,"kcal":52,"proteins":10,"carboHydrates":3.1,"fats":0.5,"srcImg":"assets/food-images/yogurt-proteins.jpg","portionName":"Unidad","portionQuantitie":3,"id":"436", "tags":[mealTag.GlutenFree, mealTag.Lactose]},
    {"name":"Pechuga de pavo","description":"","weight":100,"kcal":78,"proteins":19.5,"carboHydrates":0,"fats":0,"srcImg":"assets/food-images/turkey.jpg","portionName":"","portionQuantitie":3,"id":"187", "tags": [mealTag.Meat] }
];
  constructor() { }

  ngOnInit(): void {
  }

}
