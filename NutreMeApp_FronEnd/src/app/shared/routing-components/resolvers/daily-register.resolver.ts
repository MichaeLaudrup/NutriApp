import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { DailyMealsRegisterService } from "@core/services";
import { DailyMealsRegisterFacade } from "@ngrx/ngrx-diet";
import { UserDataFacadeService, usersFacade } from "@ngrx/ngrx-shared";
import { concatMap, Observable, take, of, map, mergeMap } from "rxjs";
import { UserDataService } from "src/app/core/services/user-data.service";
import { DailyMealsRegister } from "../../models/daily-meals-register.model";


@Injectable()
export class  dailyMealsRegisterResolver implements Resolve<DailyMealsRegister>{
    constructor( 
        private router: Router,
        private userDataFacade: UserDataFacadeService,
        private userDataService: UserDataService,
        private userProfileFacada: usersFacade,
        private dailyMealsRegisterService: DailyMealsRegisterService,
        private dailyMealsRegisterFacade: DailyMealsRegisterFacade ){}

        resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): DailyMealsRegister | Observable<DailyMealsRegister> | Promise<DailyMealsRegister> {
            return this.dailyMealsRegisterFacade.DailyMealsRegister$.pipe(take(1), concatMap( dailyMealRegister => {
                if(dailyMealRegister && dailyMealRegister._id !== 'none' && dailyMealRegister.date && dailyMealRegister.scheduledMeals){
                    return of(dailyMealRegister);
                }else{
                    return this.dailyMealsRegisterService.getMyDailyRegisterMeals(new Date()).pipe( map(dailyMealRegister => {
                        this.dailyMealsRegisterFacade.setDailyMealsRegister(dailyMealRegister); 
                        return dailyMealRegister; 
                    })) 
                }  
            }))
        }
}