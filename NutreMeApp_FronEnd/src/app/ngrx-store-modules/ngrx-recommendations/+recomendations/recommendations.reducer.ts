import { Action, createReducer, on } from "@ngrx/store";
import { DailyMealsRegister, ScheduledMeals } from "@shared/models";
import { Macronutrients } from "src/app/shared/models/macronutrients.model";
import * as RecommendationActions from './recommendations.actions';

export interface RecommendationState {
    recommendedScheduledMeals: ScheduledMeals[]
}
const initialState : RecommendationState = {
    recommendedScheduledMeals: []
}

export const recommendationsReducer = createReducer<RecommendationState, Action>( initialState,
    on(RecommendationActions.requestRecommendation, (state) => ({...state})),
    on(RecommendationActions.requestRecommendationSuccess, ( state, {scheduledMeal}) => ({
        ...state,
        recommendedScheduledMeals: [...state.recommendedScheduledMeals, scheduledMeal] }))
); 
