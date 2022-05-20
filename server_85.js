import express from 'express';
const app = express();

import dotenv from 'dotenv';
dotenv.config();

// db and authenticateUser
import connectDB_85 from './db/connect_85.js';

// routes
import authRoutes_85 from './routes/authRoutes_85.js';

// middleware
import notFoundMiddleware_85 from './middleware/not-found_85.js';
import errorHandleMiddleware_85 from './middleware/error-handler_85.js';

app.use(express.json());

app.get('/',(req, res) => {
    //throw new Error('testing for error');
    res.send('Welcome 湯士緯 209410785');
});

app.use('/api/v1/auth_85', authRoutes_85);

app.use(notFoundMiddleware_85);
app.use(errorHandleMiddleware_85);

const port = process.env.PORT || 5000;


const start = async () => {
    try{
        await connectDB_85(process.env.MONGO_LOCAL_URL).then( () => {
            console.log('Connecting to MongoDB');
        });
        app.listen(port, () => console.log(`Server is running on port ${port}`));
    }catch(err){
        console.log(err);
    }
}

start();