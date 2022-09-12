import { NextFunction, Request, Response } from "express";
import { UserDataModel } from "../models/userData.model";


export const newUserData = async(req: Request, res:Response, next: NextFunction) => {
    try{
        const newUserData = await UserDataModel.create({
            nutritionalTarget: req.body.nutritionalTarget,
            age: req.body.age,
            weight: req.body.weight,
            height: req.body.height,
            feedingType: req.body.feedingType,
            gender: req.body.gender, 
            activityIntesity: req.body.activityIntesity,
        }); 
        res.status(201).json({
            status: 'success',
            data: {
                newUserData
            }
        })
    }catch (err) {
        next(err)
    }
}