import express, { Application, NextFunction, Request, Response} from 'express'; 
import { errorMiddleware } from './middleware/error.middleware';
import mealsRouter from './routes/meals.routes'; 
import userRouter from './routes/users.routes'; 
import userDataRouter from './routes/user-data.routes'; 
import dailyMealsRegisterRouter from './routes/daily-meals-register.routes'; 
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

const port = process.env.SERVER_PORT_NUMBER || 5000; 

app.use(express.json()); 
const server = app.listen(port, () => { 
    console.log('listening at port 3000 on ' + (process.env.NODE_ENV) + ' mode');  
}); 

app.use('/api/v1/meals', mealsRouter ); 
app.use('/api/v1/users', userRouter);
app.use('/api/v1/user-data', userDataRouter); 
app.use('/api/v1/daily-meals-registers', dailyMealsRegisterRouter); 
app.all('*', (req: Request, res: Response, next: NextFunction) => {
    next(new OperationalError( `Can't find the url ${req.originalUrl} on this server!`, 404 )); 
})

app.use( errorMiddleware); 

