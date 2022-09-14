import { createReducer, on } from '@ngrx/store';
import { NutritionTarget } from 'src/app/shared/enums/nutrition-target.enum';
import { FisiologicData } from 'src/app/shared/models/fisiologicData.model';
import * as SharedActions from './user-data.actions';

export interface UserDataState {
    objetivo:NutritionTarget,
    datos_fisiologicos: FisiologicData,
}

export const initialState: UserDataState = {
   objetivo: NutritionTarget.hypertrophy,
   datos_fisiologicos: {
        altura: 178,
        peso: 83,
        edad: 28,
        genero: 'Hombre',
        nivel_actividad: 1.375,
        mba: 1909,
        mbaWithActivity: 2624.875,
        mbaWithActivityAndObjetive: 3149.85,
        imc: 26.19,
        diaryWater: 2.96,
        diaryCarbohydrates: (1227.129 / 4),
        diaryFats: (787.436 / 9),
        diaryProtein: (419.98 / 4)
    }

}

export const userDataReducer = createReducer(initialState,
    on(SharedActions.setTarget, (state, {objetivo}) => ({ ...state, objetivo})),


    on(SharedActions.putFisiologicData, (state, {datos_fisiologicos}) => {
        let {nivel_actividad, peso} = datos_fisiologicos; 
        let mba = calcMBA(datos_fisiologicos); 
        let mbaWithActivity = mba * nivel_actividad; 
        let mbaWithActivityAndObjetive = calcMBAWithObjetive( mbaWithActivity, state.objetivo); 
        let imc = calcIMC(datos_fisiologicos); 
        let diaryWater = (peso / 7 * 250) / 1000;
        let { diaryCarbohydrates, diaryProtein, diaryFats} = calcMacroNutriensDistribution(mbaWithActivityAndObjetive, state.objetivo); 
        return ({...state, 
            datos_fisiologicos: {...datos_fisiologicos,
                mba,
                mbaWithActivity, 
                imc, 
                mbaWithActivityAndObjetive,
                diaryWater,
                diaryCarbohydrates,
                diaryProtein,
                diaryFats}})
    })
);


const calcMBA = function ({ altura, peso, edad, genero}: FisiologicData ) : number { 
    let mba = 0; 
    if(genero === 'Hombre'){
        mba = Math.trunc(66.5 + (13.76 * peso ) + (5.003 * altura) - (6.755 * edad)); 
    }else{
        mba = (665 + (9.563 * peso ) + (1.850 * altura) - (4.676 * edad));; 
    }
    return mba; 
}

const calcIMC = function ({altura, peso}: FisiologicData) : number {
    return ((peso) / (altura/100)**2); 
}

function calcMBAWithObjetive(mbaWithActivity: number, objetive: NutritionTarget) : number{
    switch(objetive){
        case NutritionTarget.maintainWeight:
            return mbaWithActivity; 
        case NutritionTarget.lostWeight: 
            return mbaWithActivity * 0.85;
        case NutritionTarget.gainWeight:
            return mbaWithActivity * 1.15; 
        case NutritionTarget.define: 
            return mbaWithActivity * 0.80; 
        default: 
            return mbaWithActivity * 1.20;  
    }
}

function calcMacroNutriensDistribution(mbaWithActivityAndObjetive: number, objetivo: NutritionTarget): { diaryCarbohydrates: number; diaryProtein: number; diaryFats: number; } 
{


    // 1.6 -2.5 gr de proteina por kg de peso
    // .5 - 1gr de grasa por kg de peso
    // El resto hidratos
    
    /* let proteinsCal = (83*2)*4; 
    let fatCal = (83*1) * 9;
    let hidrates = mbaWithActivityAndObjetive - proteinsCal -fatCal;   */

    return {diaryCarbohydrates: (mbaWithActivityAndObjetive * .55) /4,
             diaryFats:  (mbaWithActivityAndObjetive * .25) / 9,
              diaryProtein: (mbaWithActivityAndObjetive * .20) / 4}; 
}

