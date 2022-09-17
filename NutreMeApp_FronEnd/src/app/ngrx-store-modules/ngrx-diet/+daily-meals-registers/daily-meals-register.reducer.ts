import { Action, createReducer, on } from "@ngrx/store";
import { DailyMealsRegister, ScheduledMeals } from "@shared/models";
import { Macronutrients } from "src/app/shared/models/macronutrients.model";
import * as DailyMealsRegisterActions from './daily-meals-register.actions';

export interface DailyMealRegisterState {
    _id: string,
    date: Date,
    scheduledMeals: ScheduledMeals[],
    totalMacro: Macronutrients,
    totalKcal: number
}
const initialState : DailyMealRegisterState = {
    _id: undefined,
    date: undefined,
    scheduledMeals: [],
    totalMacro: undefined,
    totalKcal: 0


}

export const dailyMealsRegisterReducer = createReducer<DailyMealRegisterState, Action>( initialState,
    on(DailyMealsRegisterActions.requestDailyMealsRegister, (state) => ({...state})),
    on(DailyMealsRegisterActions.requestDailyMealsRegisterSuccess, (state, {dailyMealsRegister}) => ({...state, ...dailyMealsRegister })),
    on(DailyMealsRegisterActions.setDailyMealsRegister, (state, {dailyMealsRegister}) => {
        const dailyMealsRegisterToClass = new DailyMealsRegister( dailyMealsRegister._id, dailyMealsRegister.date, dailyMealsRegister.scheduledMeals);
        return dailyMealsRegisterToClass
    })
    ); 
