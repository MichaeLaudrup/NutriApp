export enum mealTag {
    Vegetarian = "Vegetariano",
    GlutenFree ="Gluten Free", 
    Eco = "Eco", 
    Meat = "Carne",
    Vegetable ="Verdura", 
    Fruit = "Fruta",
    Lactose = "Lactosa",
    FreeLactose = "Libre Lactosa"
}


export const getMealTag = function( mealTagType: mealTag) : string {
    switch(mealTagType){
        case mealTag.Vegetarian: 
            return 'vegan'; 
        case mealTag.Fruit: 
            return 'fruit';
        case mealTag.Lactose: 
            return 'lactose';
        case mealTag.GlutenFree: 
            return 'gluten_free'; 
        case mealTag.Meat: 
            return 'meat';  
        default: 
            return 'generic_icon';  
    }
}
