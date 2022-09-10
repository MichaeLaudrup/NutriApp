import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { concatMap, Observable, take, of } from "rxjs";
import { SectionMeal } from "../../models/section-meal.model";
import { MealSectionsFacade } from "../../store-modules/ngrx-meals-sections/+section_meals/section-meals.facade";


@Injectable()
export class ListMealsResolver implements Resolve<SectionMeal[]>{
    constructor( private router: Router, private sectionMealFacade: MealSectionsFacade){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): SectionMeal[] | Observable<SectionMeal[]> | Promise<SectionMeal[]> {
        return null; 
    }
    
}