import { NextFunction, Request, Response } from "express";
import { OperationalError } from "../shared/error.interface";
import { promisify } from "util";
import { UserModel } from "../models/user.model";
const jwt = require('jsonwebtoken'); 
export const accessRouteProtector = async (req: Request, res: Response, next: NextFunction) => {
    try{ 
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            const token = req.headers.authorization.split(' ')[1]; 
            const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET); 
            const user: any = await UserModel.findById(decoded.id); 
            if(user){
                if(user.passwordChangedAt && user.changedPasswordAfter(decoded.iat)){
                    throw new OperationalError('Vueva a iniciar sesión o llamamos a la policia.')
                }else{
                    req.body.user = user; 
                    next(); 
                }
            }else{
                throw new OperationalError('No user finded to this token')

            }
        }else{
            throw new OperationalError('Brecha de seguridad! Estamos enviando los datos de su dirección IP a la polícia Nacional', 401); 
        }
    }catch(err){
        next(err)
    }
} 

export default accessRouteProtector; 