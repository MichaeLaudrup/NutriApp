export enum mealTag {
    Vegetarian = "VEGETARIANO",
    Vegan = "VEGANO",
    Nuts = "FRUTOS_SECOS",
    GlutenFree ="Gluten Free", 
    Eco = "Eco", 
    Meat = "CARNE",
    Vegetable ="Verdura", 
    Fruit = "Fruta",
    Lactose = "LACTEO",
    FreeLactose = "Libre Lactosa",
    AnimalOrigin = "ORIGEN_ANIMAL",
    Fish = 'PESCADO',
    Beans = 'LEGUMBRES'
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
