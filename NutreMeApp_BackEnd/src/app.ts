import express, { Application, NextFunction, Request, Response} from 'express'; 
import { errorMiddleware } from './middleware/error.middleware';
import mealsRouter from './routes/meals.routes'; 
import userRouter from './routes/users.routes'; 
import userDataRouter from './routes/user-data.routes'; 
import RulesEngine from './services/rules-engine/rules-engine.service';
import { OperationalError } from './shared/classes/error.interface';
require('./utils/error-handlers'); 
const cors = require('cors'); 
const dotenv = require('dotenv'); 
dotenv.config({path: `${__dirname}/../config.env`});
require('./database');


const app : Application = express();
app.use(cors()); 
const port = process.env.SERVER_PORT_NUMBER || 5000; 

app.use(express.json()); 
const server = app.listen(port, () => { 
    console.log('listening at port 3000 on ' + (process.env.NODE_ENV) + ' mode');  
}); 

app.use('/api/v1/meals', mealsRouter ); 
app.use('/api/v1/users', userRouter);
app.use('/api/v1/userData', userDataRouter); 
app.all('*', (req: Request, res: Response, next: NextFunction) => {
    next(new OperationalError( `Can't find the url ${req.originalUrl} on this server!`, 404 )); 
})

app.use( errorMiddleware); 

/* 

import csv from 'csv-parser'; 
import fs, { writeFile } from 'fs'; 
import { MealModel } from './models/meal.model';

let arrayNames: any [] = []; 
const readStream = fs.createReadStream(`${__dirname}/../data_source/food-composition.csv`);
readStream.pipe(csv()).on('data',async (data) => {
    let tags: String[] = []; 
    for(let propertieName in data ){
        if((propertieName !== 'Nombre') && 
            (propertieName !== 'Calorias') && 
            (propertieName !== 'Carbohidratos') &&
            (propertieName !== 'Proteinas') &&
            (propertieName !== 'Grasas')){
            if(data[propertieName] === 'true'){
                tags.push(propertieName.toUpperCase())
            }
        }
    }

    arrayNames.push({
        x: data.x,
        name: data.Nombre.replace(/'/g, ''),
        description: '',
        weight: 100,
        kcal: +data.Calorias,
        proteins: +data.Proteinas,
        carboHydrates: +data.Carbohidratos,
        fats: +data.Grasas,
        srcImg: 'default-image',
        tags
    }); 
}).on('end', () => {
    fs.writeFile(`${__dirname}/../data_source/output`, arrayNames.join('\n'), (err)=> {
        console.log(err); 
        arrayNames.forEach( meal => {
            MealModel.create({
                ...meal
            }).catch(err => {
                console.log('ERR IN', meal.name, meal.x)
                console.error(err)
            });
        })
    })
});  */