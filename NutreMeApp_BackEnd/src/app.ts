import express, { Application, NextFunction, Request, Response} from 'express'; 
import { errorMiddleware } from './middleware/error.middleware';

/* ROUTERS IMPORTS */
import mealsRouter from './routes/meals.routes'; 
import userRouter from './routes/users.routes'; 
import userDataRouter from './routes/user-data.routes'; 
import dailyMealsRegisterRouter from './routes/daily-meals-register.routes'; 
import sectionMealRouter from './routes/section-meals.routes'
/* END-ROUTERS */
import { OperationalError } from './shared/classes/error.interface';
require('./utils/error-handlers'); 
const cors = require('cors'); 
const dotenv = require('dotenv'); 
dotenv.config({path: `${__dirname}/../config.env`});
require('./database');



const app : Application = express();

const whiteList = [
    'http://localhost:4200',
]; 
app.use(cors({
    origin: whiteList
})); 


const path = require('path').join(__dirname, 'public')
app.use('/static', express.static(path))

const port = process.env.SERVER_PORT_NUMBER || 5000; 

app.use(express.json()); 
const server = app.listen(port, () => { 
    console.log('listening at port 3000 on ' + (process.env.NODE_ENV) + ' mode');  
}); 

const baseRoute = process.env.BASE_API_ROUTE_ACCESS ||'/api/v1'; 


app.use(`${baseRoute}/meals`, mealsRouter ); 
app.use(`${baseRoute}/users`, userRouter);
app.use(`${baseRoute}/user-data`, userDataRouter); 
app.use(`${baseRoute}/daily-meals-registers`, dailyMealsRegisterRouter); 
app.use(`${baseRoute}/section-meals`, sectionMealRouter); 
app.all('*', (req: Request, res: Response, next: NextFunction) => {
    next(new OperationalError( `Can't find the url ${req.originalUrl} on this server!`, 404 )); 
})

app.use( errorMiddleware); 

