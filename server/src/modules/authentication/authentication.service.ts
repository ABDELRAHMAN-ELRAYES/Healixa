import { NextFunction ,Response} from 'express';
import { IUserLoginData } from './interfaces/user-login-data';
import UserService from '../user/user.service';
import { compare } from '../../utils/hashing-handler';
import AppError from '../../utils/app-error';
import { signJWT, verifyJWT } from '../../utils/jwt';

class AuthenticationService {
  static async login(userData: IUserLoginData,response:Response, next: NextFunction) {
    const { usernameOrEmail, password } = userData;

    // Check if the provided usernmae or email is fourn
    const user = await UserService.getUserByUsernameOrEmail(
      usernameOrEmail,
      next
    );
    if (!user) return;
    // Check if the provided password is correct
    const verifyPassword = await compare(password, user.password);
    if (!verifyPassword) {
      next(
        new AppError(
          401,
          `User with provided : ${usernameOrEmail} or Password is not correct, Try again!`
        )
      );
      return;
    }
    // Create jwt token and Add cookie
    const token = signJWT(user.id,response);
    
    const data = { user, token };

    return data;
  }
}

export default AuthenticationService;
