import { createAction, props } from "@ngrx/store";
import { DailyMealsRegister } from "@shared/models";

export const requestDailyMealsRegister = createAction(
    '[ngrx-diet/daily-meals-register] Request to serve a Daily Meal Register',
    props<{ date: Date}>())

export const requestDailyMealsRegisterSuccess = createAction(
    '[ngrx-diet/daily-meals-register] Request to serve a Daily Meal Register Success',
    props<{ dailyMealsRegister: DailyMealsRegister}>())
