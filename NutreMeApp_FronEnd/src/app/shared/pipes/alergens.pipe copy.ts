import { Pipe, PipeTransform } from "@angular/core";
import { Alergens } from "../enums/alergens.enum";


const getSvgIconName = ( mealTagType:Alergens) => {
    switch(mealTagType){
        case Alergens.Egg: 
            return 'egg';
            
        case Alergens.Fish: 
            return 'fish'; 
        case Alergens.Fructose: 
            return 'fructose'; 
        case Alergens.Gluten: 
            return 'gluten'; 
        case Alergens.Lactose: 
            return 'lactose'; 
        case Alergens.Nuts: 
            return 'nuts';
        case Alergens.SeaFood: 
            return 'seafood'; 
        case Alergens.Soy: 
            return 'soy'; 
        default: 
            return 'generic_icon';  
    }
}; 

@Pipe({
    name: 'fromAlergenToSvgIcon'
})
export class toSvgAlergenIcon implements PipeTransform {
    transform(tag: Alergens) {
        return getSvgIconName(tag); 
    }
}