import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as homeReducer from './user-data.reducer'; 


export const userDataSelectors = createFeatureSelector<homeReducer.UserDataState>('home-store'); 

export const getObjetivo = createSelector(
    userDataSelectors,  (state) => state['user-data'].objetivo
);

export const getDatosFisio = createSelector(
    userDataSelectors, (state) => state['user-data'].datos_fisiologicos
); 
