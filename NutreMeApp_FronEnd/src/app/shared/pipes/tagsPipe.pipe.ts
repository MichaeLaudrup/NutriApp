import { Pipe, PipeTransform } from "@angular/core";
import { mealTag } from "../enums/tag.enum";


const getSvgIconName = ( mealTagType:mealTag) => {
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
}; 


@Pipe({
    name: 'fromTagToSvgIcon'
})
export class toTagSvgIconPipe implements PipeTransform {
    transform(tag: mealTag) {
        return getSvgIconName(tag); 
    }
}