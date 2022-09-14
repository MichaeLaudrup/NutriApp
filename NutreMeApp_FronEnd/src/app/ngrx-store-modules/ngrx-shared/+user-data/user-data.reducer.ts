import { createReducer, on } from '@ngrx/store';
import { FeedingType, NutritionTarget } from '@shared/enums';
import { UserData} from 'src/app/shared/models/fisiologicData.model';
import * as SharedActions from './user-data.actions';

export interface UserDataState {
    userData: UserData
}

export const initialState: UserDataState = {
    userData:  {
        nutritionalTarget: NutritionTarget.hypertrophy,
        fisiologicData: {
            height: 178,
            weight: 83,
            age: 28,
            gender: 'Hombre',
            activityIntesity: 1.375,
        },
        feedingType: FeedingType.OMNIVORE
    }
}

export const userDataReducer = createReducer(initialState,
    on(SharedActions.setTarget, (state, {objetivo}) => ({ ...state, objetivo})),


    on(SharedActions.putFisiologicData, (state, {fisiologicData}) => ({
        ...state,
        userData: {
            ...state.userData,
            fisiologicData: {...fisiologicData}
        }
    })),
    on(SharedActions.postFeedingType, (state, {feedingType} ) => ({ ...state, userData: { ...state.userData, feedingType}})),
    on(SharedActions.uploadUserDataToServer, (state, { userId, userData}) => ({...state})),
    on(SharedActions.uploadUserDataToServerSuccess, (state, { user}) => ({
        ...state,
        userData: {
            nutritionalTarget: user.nutritionalTarget,
            fisiologicData: {...user.fisiologicData},
            feedingType: user.feedingType
        }
    })),
    on(SharedActions.uploadUserDataToServerFailure, (state, { errorPayload}) => ({...state}))
);