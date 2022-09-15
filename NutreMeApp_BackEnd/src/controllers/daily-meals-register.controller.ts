import { NextFunction, Request, Response } from "express"
import { dailyMealsRegisterModel } from "../models/daily-meals-register.model"


export const addNewDailyMealsRegister = async(req: Request, res:Response, next: NextFunction) => {
    try{
        const newDailyMealsRegister = await dailyMealsRegisterModel.create({
            date: req.body.date,
            scheduledMeals: [...req.body.scheduledMeals],
            userId: req.body.user._id
        })
        res.status(201).json({
                dailyMealsRegister: newDailyMealsRegister
        })
    }catch (err) {
        next(err)
    }
}

export const getAllMyDailyMealsRegister = async(req: Request, res: Response, next: NextFunction) => {
    try{
        const MyDailyRegisters = await dailyMealsRegisterModel.find().populate('scheduledMeals.aliments'); 
        res.status(201).json({
            status: 'success',
            data:{
                dailyMealsRegister: [
                    ...MyDailyRegisters
                ]
            }
        })
    }catch(err){
        next(err); 
    }
}