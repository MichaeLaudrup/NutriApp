import { NextFunction, Request, Response } from "express"
import { SectionMealModel } from "../models/section-meal.model"
import { OperationalError } from "../shared/classes/error.interface"

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
                section
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
        const section = await SectionMealModel.findByIdAndUpdate(req.params['id'], {
            imgPath: req.file.filename
        },{ 
            new: true, //return de "new" document
            runValidators: true,
        }); 
        res.status(200).json({
            status: 'success',
            data: {
                section
            }
        })
    }catch (err) {
        next(err)
    }
}
export const deleteSectionMeal = async(req: Request, res:Response, next: NextFunction) => {
    try{
        if(req.body.user){
            const sectionToDelete = await SectionMealModel.findOne({_id: req.params['id'], userId: req.body.user._id}); 
            if(sectionToDelete){
                sectionToDelete.delete(); 
                return res.status(204).json({
                    status: 'success',
                })
            }else{
              return new OperationalError('La seccion de alimentos especificada no existe', 404)  
            }
        }
    }catch (err) {
        next(err)
    }
}

export const updateSecionMeal = async(req: Request, res:Response, next: NextFunction) => {
    try{
        const section = await SectionMealModel.findOneAndUpdate({_id: req.params['id'], userId: req.body.user._id}, {
            name: req.body.name
        }); 
        return res.status(201).json({
            status: 'success',
            data: {
                section
            }
        })
            
        
    }catch (err) {
        next(err)
    }
}