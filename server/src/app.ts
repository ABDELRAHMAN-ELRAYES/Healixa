import express from 'express';
import userRouter from './modules/user/routes/user.route';
import { bodyParser } from './middlewares/middlewares';

// define the express app
const app = express();
app.use(bodyParser);

// mounting routers to express app
app.use('/users', userRouter);

export default app;
