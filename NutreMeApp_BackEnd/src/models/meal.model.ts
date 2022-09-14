import mongoose from "mongoose";


/* Aqui van los campos por lo que se puede filtrar una busqueda */
export const fieldOfMealModel = ['name', 'weight', 'kcal', 'proteins', 'carboHydrates', 'fats', 'tags']; 

const mealSchema: mongoose.Schema = new mongoose.Schema({
    name: {
      type: String,
      required:[true, 'A meal must have a name'],
      unique:true,
      dropDups:true,
      trim: true,
    },
    description: {
      type: String,
      default: 'No hay ninguna descripción especificada para este alimento. ',
      trim: true
    }, 
    weight: {
      type: Number,
      default: 100,
    }, 
    kcal: {
      type: Number,
      require: [true, 'A meal must have kcal quantitie']
    }, 
    proteins: {
      type: Number,
      require: [true, 'A meal must have proteins quantitie']
    },
    carboHydrates: {
      type: Number,
      require: [true, 'A meal must have carbohydrates quantitie']
    },
    fats: {
      type: Number,
      require: [true, 'A meal must have fats quantitie']
    },
    tags: {
      type: [String],
      enum: {
        values: ['CARNE', 'VERDURA', 'GLUTEN', 'VEGANO', 'LACTEO', 'CEREALES', 'FRUTA', 'FRUTOSSECOS', 'LEGUMBRES', 'VEGETALES', 'MARISCO', 'PESCADO'],
        message: '{VALUE} is a Tag not supported'
      }
    },
    srcImg: String,
    createAt: {
      type:Date,
      default: Date.now(),
      select: false
    }
});

export const MealModel = mongoose.model('Meal', mealSchema, 'meals')
