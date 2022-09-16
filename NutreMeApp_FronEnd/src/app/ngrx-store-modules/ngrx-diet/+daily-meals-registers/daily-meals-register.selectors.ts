import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DietAppState } from '../diet.state';

export const getSharedAppSelector = createFeatureSelector<DietAppState>('diet'); 

export const getDailyMealRegister = createSelector(
    getSharedAppSelector,  (state:DietAppState ) => state.dailyMealsRegister
); 


