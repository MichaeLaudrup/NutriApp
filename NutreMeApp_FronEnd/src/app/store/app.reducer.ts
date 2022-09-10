/* Este documento contendra todos los reducers de la aplicacion */

 import { ActionReducerMap, createReducer } from "@ngrx/store";

export interface GlobalState {
        nombreAplicacion: string
}


export interface AppState {
    initState: GlobalState
}

export const initialState = {
    nombreAplicacion: 'Nutreme app'
}; 


export const initStateReducer = createReducer( initialState,
    ); 

export const appReducers: ActionReducerMap<AppState> = {
    initState: initStateReducer
}; 