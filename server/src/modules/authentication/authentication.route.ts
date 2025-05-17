import { Router } from 'express';
import { login } from './authentication.controller';

const AuthenticationRouter = Router();


AuthenticationRouter.route('/login').post(login);


export default AuthenticationRouter;
