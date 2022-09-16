import { Aliment } from "./meal.model"

export class ScheduledMeals {
    name: string
    aliments: Aliment[]

    constructor(name: string, aliments: Aliment[]){
        this.name = name;
        this.aliments = aliments; 
    }
    public get getMacronutrients(): { carbo: number, proteins: number, fats: number, kcal: number} {
        return this.aliments.reduce((acc: {carbo:number, proteins:number, fats: number, kcal: number}, aliment) => {
            return {
                carbo: acc.carbo + aliment.carboHydrates,
                proteins: acc.proteins + aliment.proteins,
                fats: acc.fats + aliment.fats,
                kcal: acc.kcal + aliment.kcal
            }
        }, {carbo: 0, proteins: 0, fats:0, kcal:0})
    }
}