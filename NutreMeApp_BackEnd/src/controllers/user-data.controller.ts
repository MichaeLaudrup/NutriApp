import { NextFunction, Request, Response } from "express";
import { UserDataModel } from "../models/user-data.model";
import { UserModel } from "../models/user.model";
import { OperationalError } from "../shared/classes/error.interface";


export const newUserData = async(req: Request, res:Response, next: NextFunction) => {
    try{
        const userProfile = await UserModel.find({_id:req.body.userId});
        if(userProfile){
            const userData = req.body.userData; 
            const newUserData = await UserDataModel.create({
                nutritionalTarget: userData.nutritionalTarget,
                age: userData.fisiologicData.age,
                weight: userData.fisiologicData.weight,
                height: userData.fisiologicData.height,
                feedingType: userData.feedingType,
                gender: userData.fisiologicData.gender, 
                activityIntesity: userData.fisiologicData.activityIntesity,
            });
            res.status(201).json({
                status: 'success',
                data: {
                    newUserData
                }
            })
        }else{
            throw new OperationalError('El identificador de usuario proporcionado no existe')
        }
        
    }catch (err) {
        next(err)
    }
}