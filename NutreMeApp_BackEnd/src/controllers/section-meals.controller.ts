import { NextFunction, Request, Response } from "express"
import { SectionMealModel } from "../models/section-meal.model"

export const addSectionMeals = async(req: any, res:Response, next: NextFunction) => {
    try{
        const section = await SectionMealModel.create({
            name: req.body.name,
            meals: [...req.body?.meals] ,
            imgPath: req.file?.filename ?? undefined,
            userId: req.body.user._id
        })

        res.status(201).json({
            status: 'success',
            data: {

            }
        })
    }catch (err) {
        next(err)
    }
}

export const getMySectionMeals = async(req: Request, res:Response, next: NextFunction) => {
    try{
        const sections = await SectionMealModel.find({userId: req.body.user._id}).populate('meals');
        res.status(201).json({
            status: 'success',
            data: {
                sections
            }
        })
    }catch (err) {
        next(err)
    }
}

export const attachPhotoToSection = async(req: any, res:Response, next: NextFunction) => {
    try{
        console.log(req.file.filename)
        res.status(200).json({
            status: 'success',
            data: {

            }
        })
    }catch (err) {
        next(err)
    }
}