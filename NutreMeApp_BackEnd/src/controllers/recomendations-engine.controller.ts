import { NextFunction, Request, Response } from "express"
import { MealModel } from "../models/meal.model";
import { UserDataModel } from "../models/user-data.model";
import RulesEngine from "../services/rules-engine/rules-engine.service"

export const runEngine = async(req: Request, res:Response, next: NextFunction) => {
    try{
        const engine = new RulesEngine(); 
        const complexQuery = await engine.probeFact({feedingType: 'VEGETARIANO', allergens: ['GLUTEN', 'HUEVO']});
        console.log(complexQuery)
        const aliments = await MealModel.find({...complexQuery})
        const userData = await UserDataModel.findOne({userId: req.body.user._id}); 
        res.status(200).json({
            status: 'success',
            longitud: aliments.length,
            aliments
        })
    }catch (err) {
        next(err)
    }
}