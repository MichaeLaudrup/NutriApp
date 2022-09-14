import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User, UserData } from "@shared/models";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root'})
export class UserDataService {
    constructor( private http: HttpClient){}
    /**
     * Este metodo introduce por primera vez los datos de usuario
     * @param userId Identificador de usuario
     * @param userData Informacion fisiologica del usuario
     */
    postUserData( userId: string, userData: UserData): Observable<UserData>{
        return this.http.post<{status: string, data: {newUserData: any}}>(`${environment.apiUrlBase}/user-data`, { userId, userData})
            .pipe( map(jsendResponse => { 
                const data = jsendResponse.data.newUserData; 
                const userDataParse: UserData = {
                    feedingType : data.feedingType,
                    nutritionalTarget: data.nutritionalTarget,
                    fisiologicData: {
                        activityIntesity: data.activityIntesity,
                        age: data.age,
                        weight: data.weight,
                        height: data.height,
                        gender: data.gender,
                        mba: data.mba,
                        mbaWithActivity: data.mbaWithActivity,
                        mbaWithActivityAndObjetive: data.mbaWithActivityAndObjetive,
                        diaryWater: data.diaryWater,
                        imc: data.imc,
                    }
                }
                return userDataParse
            }))
    }

    updateUserData(userId: string, userDataUpdate: UserData){

    }
}