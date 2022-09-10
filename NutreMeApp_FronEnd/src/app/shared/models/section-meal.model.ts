import { Aliment } from "./meal.model";

export class SectionMeal {
    private _id?: string 
    name: string
    meals: Aliment[]
    imgPath: string
    public set id( id: string){
        this._id = id; 
    }
}