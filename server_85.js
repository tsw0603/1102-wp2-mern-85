import express from 'express';
const app = express();

import dotenv from 'dotenv';
dotenv.config();

import 'express-async-errors';

import morgan from 'morgan';
//import cors from 'cors';

// db and authenticateUser
import connectDB_85 from './db/connect_85.js';

// routes
import authRoutes_85 from './routes/authRoutes_85.js';

// middleware
import notFoundMiddleware_85 from './middleware/not-found_85.js';
import errorHandleMiddleware_85 from './middleware/error-handler_85.js';

if(process.env.NODE_ENV !== 'production'){
    app.use(morgan('dev'));
}

//app.use(cors());
app.use(express.json());

app.get('/',(req, res) => {
    //throw new Error('testing for error');
    //res.send('Welcome 湯士緯 209410785');
    res.json({ msg: 'Welcome 湯士緯 209410785'});
});

app.get('/api/v1',(req,res)=>{  
    res.json({msg:'API v1 -- Welcome 209410785'})
  });

app.use('/api/v1/auth_85', authRoutes_85);

app.use(notFoundMiddleware_85);
app.use(errorHandleMiddleware_85);

const port = process.env.PORT || 5000;


const start = async () => {
    try{
        await connectDB_85(process.env.MONGO_URL).then( () => {
            console.log('Connecting to MongoDB');
        });
        app.listen(port, () => console.log(`Server is running on port ${port}`));
    }catch(err){
        console.log(err);
    }
}

start();