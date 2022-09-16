import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DietAppState } from '../diet.state';

export const getSharedAppSelector = createFeatureSelector<DietAppState>('meals'); 
/* 
export const getListMeals = createSelector(
    getSharedAppSelector,  (state:DietAppState ) => state.dailyMealsRegister
); */


