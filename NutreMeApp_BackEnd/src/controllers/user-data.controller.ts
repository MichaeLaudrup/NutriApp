import { NextFunction, Request, Response } from "express";
import { UserDataModel } from "../models/user-data.model";
import { UserModel } from "../models/user.model";
import { OperationalError } from "../shared/classes/error.interface";


export const newUserData = async(req: Request, res:Response, next: NextFunction) => {
    try{
        const userId = req.body.user.id; 
        const userProfile = await UserModel.find({_id:userId});
        if(userProfile){
            const userDataFromFront = req.body.userData; 
            const userDataExistOnMongo = await UserDataModel.findOne({ userProfile: userId})
            let userData; 
            if(!userDataExistOnMongo){
                userData = await UserDataModel.create({
                    userProfile: userId,
                    nutritionalTarget: userDataFromFront.nutritionalTarget,
                    age: userDataFromFront.fisiologicData.age,
                    weight: userDataFromFront.fisiologicData.weight,
                    height: userDataFromFront.fisiologicData.height,
                    feedingType: userDataFromFront.feedingType,
                    gender: userDataFromFront.fisiologicData.gender, 
                    activityIntesity: userDataFromFront.fisiologicData.activityIntesity,
                });
            }else{
                userData = await UserDataModel.findByIdAndUpdate(userDataExistOnMongo._id, {
                    nutritionalTarget: userDataFromFront.nutritionalTarget,
                    age: userDataFromFront.fisiologicData.age,
                    weight: userDataFromFront.fisiologicData.weight,
                    height: userDataFromFront.fisiologicData.height,
                    feedingType: userDataFromFront.feedingType,
                    gender: userDataFromFront.fisiologicData.gender, 
                    activityIntesity: userDataFromFront.fisiologicData.activityIntesity,
                },{ 
                    new: true, //return de "new" document
                    runValidators: true,
                })
            }
            res.status(201).json({
                status: 'success',
                data: {
                    userData
                }
            })
        }else{
            throw new OperationalError('El identificador de usuario proporcionado no existe')
        }
        
    }catch (err) {
        next(err)
    }
}

export const getUserData = async(req: Request, res:Response, next: NextFunction) => {
    try{
        const userData = await UserDataModel.findOne(req.body.user._id);
        res.status(201).json({
            status: 'success',
            data: {
                userData
            }
        })
    }catch (err) {
        next(err)
    }
}