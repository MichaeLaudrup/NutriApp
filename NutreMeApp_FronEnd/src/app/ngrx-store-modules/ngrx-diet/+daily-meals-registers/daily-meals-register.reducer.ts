import { Action, createReducer, on } from "@ngrx/store";
import { DailyMealsRegister } from "@shared/models";
import * as DailyMealsRegisterActions from './daily-meals-register.actions';


const initialState : DailyMealsRegister = undefined

export const dailyMealsRegisterReducer = createReducer<DailyMealsRegister, Action>( initialState,
    on(DailyMealsRegisterActions.requestDailyMealsRegister, (state) => ({...state})),
    on(DailyMealsRegisterActions.requestDailyMealsRegisterSuccess, (state, {dailyMealsRegister}) => ({...state, ...dailyMealsRegister }))
    ); 
