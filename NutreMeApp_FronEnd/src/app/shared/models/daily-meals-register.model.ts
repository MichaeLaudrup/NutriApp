import { ScheduledMeals } from "./scheduled-meals.model"

export class DailyMealsRegister {
    _id: string
    date: Date
    scheduledMeals: ScheduledMeals[]
}