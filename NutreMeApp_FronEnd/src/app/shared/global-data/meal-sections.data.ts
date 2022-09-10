import { SectionMeal } from "@shared/models";
import { mealTag } from "../enums/tag.enum";

export let mealSections: SectionMeal[] = [
    {
        id: '1', 
        name: 'Proteínas',
        meals: [
            {"name":"Yogurt Natural (+Proteinas)","description":"Yogures con alto contenido proteico de hacendado","weight":120,"kcal":52,"proteins":10,"carboHydrates":3.1,"fats":0.5,"srcImg":"assets/food-images/yogurt-proteins.jpg","portionName":"Unidad","portionQuantitie":3,"id":"436", "tags":[mealTag.GlutenFree, mealTag.Lactose]},
            {"name":"Pechuga de pavo","description":"","weight":100,"kcal":78,"proteins":19.5,"carboHydrates":0,"fats":0,"srcImg":"assets/food-images/turkey.jpg","portionName":"","portionQuantitie":3,"id":"187", "tags": [mealTag.Meat] }
        ],
        imgPath: 'assets/store-imgs/store-breakfast.jpg'
    }
]