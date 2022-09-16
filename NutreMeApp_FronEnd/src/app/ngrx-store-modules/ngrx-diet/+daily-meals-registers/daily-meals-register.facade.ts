import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Aliment, DailyMealsRegister } from "@shared/models";
import { Observable } from "rxjs";
import * as DailyMealsRegisterActions from './daily-meals-register.actions';
import * as DailyMealsRegisterSelectors from './daily-meals-register.selectors'; 
@Injectable()
export class DailyMealsRegisterFacade {
    constructor( private store: Store<DailyMealsRegister>) {}
    
    public requestDailyMealsRegister(date: Date) {
        this.store.dispatch(DailyMealsRegisterActions.requestDailyMealsRegister({date}))
    }

    /* public get meals$ (): Observable<Aliment[]>{
        /* return this.store.pipe( select( MealsSelectors.getListMeals)); 
    } */

    

}