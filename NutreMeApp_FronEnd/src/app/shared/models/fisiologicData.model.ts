import { FeedingType } from "../enums/feeding-type.enum";
import { NutritionTarget } from "../enums/nutrition-target.enum";


export interface FisiologicData {
    height: number,
    weight: number,
    age: number,
    gender: string, 
    activityIntesity: number,
    mba?: number,          
    mbaWithActivity?:number,
    imc?: number,
    mbaWithActivityAndObjetive?: number,           
    diaryWater?: number
}

export class UserData{
    constructor(public fisiologicData: FisiologicData,
                public nutritionalTarget: NutritionTarget,
                public feedingType: FeedingType, 
                 ){}
}

