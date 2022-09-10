import { createAction, props } from '@ngrx/store';
import { NutritionTarget } from 'src/app/shared/enums/nutrition-target.enum';
import { FisiologicData } from 'src/app/shared/models/fisiologicData.model';

/* Se crea la accion de insertar un objetivo a traves del formulario al estado global */
export const setTarget = createAction(
  '[Shared] Introducir objetivo',
  props<{ objetivo: NutritionTarget }>()
);

export const putFisiologicData = createAction(
  '[NutriApp] Poner datos fisiologicos usuario',
  props<{ datos_fisiologicos: FisiologicData}>() 
)
