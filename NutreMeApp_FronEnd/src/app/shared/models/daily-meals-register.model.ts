import { ScheduledMeals } from "./scheduled-meals.model"

export class DailyMealsRegister {
    _id: string
    date: Date
    scheduledMeals: ScheduledMeals[]

    constructor(id: string, date: Date, scheduledMeals: ScheduledMeals[]) {
        this._id = id;
        this.date = date; 
        this.scheduledMeals = scheduledMeals.map( item => new ScheduledMeals(item.name, item.aliments)); 
    }
}