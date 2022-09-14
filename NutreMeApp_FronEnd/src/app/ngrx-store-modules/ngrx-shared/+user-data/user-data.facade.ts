import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { FisiologicData, UserData} from "@shared/models";
import { Observable } from "rxjs";
import { UserDataState } from "./user-data.reducer";
import * as USER_DATA_SELECTOR from './user-data.selectors'; 
import * as USER_DATA_ACTIONS from './user-data.actions'; 
import { FeedingType, NutritionTarget } from "@shared/enums";
@Injectable()
export class UserDataFacadeService {
    constructor( private store: Store<UserDataState>) {
    }

    get fisiologicData$ () : Observable<FisiologicData>{
        return this.store.pipe( select( USER_DATA_SELECTOR.getDatosFisio)); 
    }

    get nutritionTarget$ () : Observable<NutritionTarget> {
        return this.store.pipe( select(USER_DATA_SELECTOR.getObjetivo)); 
    }

    get userData$() : Observable<UserData> {
        return this.store.pipe( select(USER_DATA_SELECTOR.getUserData))
    }

    public setFisiologicData( newFisiologicData: FisiologicData){
        this.store.dispatch(USER_DATA_ACTIONS.putFisiologicData({fisiologicData: newFisiologicData})); 
    }

    public setObjective(objetivo: NutritionTarget){
        this.store.dispatch(USER_DATA_ACTIONS.setTarget({objetivo})); 
    }

    public setFeedingType(feedingType: FeedingType){
        this.store.dispatch(USER_DATA_ACTIONS.postFeedingType({feedingType})); 
    }

    public uploadToServerUserData( userId: string, userData: UserData){
        this.store.dispatch(USER_DATA_ACTIONS.uploadUserDataToServer({userId, userData})); 
    }


}