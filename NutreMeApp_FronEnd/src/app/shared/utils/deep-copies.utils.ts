import { Aliment, SectionMeal } from "@shared/models";

export class deepCopiesUtils {

    static copyMealsWithOneDelete(meals: Aliment[], idToDelete:string){
        const newMeals : Aliment[] = meals.filter(meal =>  meal.id !== idToDelete).map((meal) => ({
            ...meal,
        }));
        return newMeals;  
    }

    static copySectionsWithOneMealDeleted(sections: SectionMeal[], idSection: string, idMeal: string): SectionMeal[]{
        return sections.map(section => ({
            ...section,
            id: section.id, 
            meals: (idSection !== section.id) ? [...section.meals] : [...section.meals.filter(meal => meal.id !== idMeal)]
        }))
    }

    static copySectionsWithOneMealEdited(sections: SectionMeal[], sectionId: string, mealUpdated: Aliment): SectionMeal[] {
        const x = sections.map(section => { 
            return {
                ...section,
                id: section.id,
                meals: (section.id !== sectionId) ? [...section.meals] : [...section.meals.map((meal) => {
                    return (meal.id === mealUpdated.id) ? {...mealUpdated} : meal })], 

            }
        })
        return x; 
    }
}