import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { DailyMealsRegister } from "src/app/shared/models/daily-meals-register.model";
import { DateToString } from "src/app/shared/utils/convertions.utils";
import { environment } from "src/environments/environment";

@Injectable({providedIn: 'root'})
export class DailyMealsRegisterService{
    constructor(private http: HttpClient){
    }

    getMyDailyRegisterMeals(date: Date) : Observable<DailyMealsRegister>{
        const dateToString = DateToString(date); 
        return this.http.get<{status:string, data: {dailyRegister: DailyMealsRegister}}>(`${environment.apiUrlBase}/daily-meals-registers?date=${dateToString}`)
            .pipe(map( (jsendResponse) => (jsendResponse.data.dailyRegister))); 
    }

}