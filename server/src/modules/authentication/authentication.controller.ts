import catchAsync from '../../utils/catch-async';
import { Request, Response, NextFunction } from 'express';
import { IUserLoginData } from './interfaces/user-login-data';
import AuthenticationService from './authentication.service';

// login user with username or email
export const login = catchAsync(
  async (request: Request, response: Response, next: NextFunction) => {
    const userData: IUserLoginData = {
      usernameOrEmail: request.body.usernameOrEmail,
      password: request.body.password,
    };

    const data = await AuthenticationService.login(userData, response, next);
    if (!data) return;
    const { user, token } = data;
    response.status(200).json({
      status: 'success',
      data: {
        message: 'Your are logged in successfully!',
        token,
        user,
      },
    });
  }
);
