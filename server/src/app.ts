import express from 'express';
import userRouter from './modules/user/routes/user.route';
import { bodyParser } from './middlewares/middlewares';
import {
  globalErrorHandler,
  notFoundHandler,
} from './middlewares/error-handler-middleware';

// define the express app
const app = express();
app.use(bodyParser);

// mounting routers to express app
app.use('/users', userRouter);


// Handle all not found routes
app.use(notFoundHandler);

// Handle any Error in the server as global Handler
app.use(globalErrorHandler);
export default app;
