import { mealTag } from "../enums/tag.enum"

export interface Aliment {
    id?: string, 
    name: string,
    tags: mealTag[],
    description?: string, 
    weight: number, 
    kcal: number, 
    proteins: number,
    carboHydrates: number,
    fats: number,
    srcImg?: string,
    portionQuantitie?: number,
    portionName?: string
}; 