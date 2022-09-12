import express from 'express'; 
import accessByLogginProtection from '../middleware/protection-by-is-loged.middleware'; 
import * as UserDataController from '../controllers/user-data.controller'; 
import { routerProtectionByRole } from '../middleware/protection-by-role.middelware';
const router = express.Router(); 
/* 
router.post('/signup', AuthController.singup); 
router.post('/login', AuthController.logIn); 
router.post('/forgotPassword', AuthController.forgotPassword); 
router.post('/resetPassword', AuthController.resetPassword);  */


router.route('/').post(accessByLogginProtection, UserDataController.newUserData)
export default router; 