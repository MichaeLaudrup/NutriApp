import express from 'express'; 
import accessByLogginProtection from '../middleware/protection-by-is-loged.middleware'; 
import * as SectionMealController from '../controllers/section-meals.controller'; 
import { uploadUserPhotoMiddleware } from '../middleware/upload-image.middleware';

const router = express.Router(); 

router.route('/').get(accessByLogginProtection, SectionMealController.getMySectionMeals).post( accessByLogginProtection, SectionMealController.addSectionMeals); 
router.route('/:id').post( accessByLogginProtection,uploadUserPhotoMiddleware, SectionMealController.attachPhotoToSection); 
export default router; 