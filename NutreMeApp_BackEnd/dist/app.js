"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/../config.env` });
require('./database');
const meals_routes_1 = __importDefault(require("./routes/meals.routes"));
const app = (0, express_1.default)();
const port = process.env.SERVER_PORT_NUMBER || 3000;
app.use(express_1.default.json());
app.listen(port, () => {
    console.log('listening at port 3000 on ' + (process.env.NODE_ENV) + ' mode');
});
app.use('/api/v1/meals', meals_routes_1.default);
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
});
 */ 
