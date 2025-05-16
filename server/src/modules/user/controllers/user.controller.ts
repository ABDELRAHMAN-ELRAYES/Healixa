import catchAsync from '../../../utils/catch-async';
import UserService from '../services/user.service';
import { Request, Response, NextFunction } from 'express';

/*
 * Create a new user based on user-type(patient, doctor, )
 */
export const saveUser = catchAsync(
  async (request: Request, response: Response, next: NextFunction) => {
    const userData = {
      type: request.body.userType,
      email: request.body.email,
      password: request.body.password,
    };
    const user = await UserService.saveUser(userData);
    response.json({ status: 'success', data: { user } });
  }
);
/*
 * Update a user by his id and new provided data
 */
export const updateUser = catchAsync(
  async (request: Request, response: Response, next: NextFunction) => {
    const updatedData = request.body.newData;
    const userId = request.params.id;
    updatedData.userId = userId;
    const user = await UserService.updateUser(updatedData);
    response.json({ status: 'success', data: { user } });
  }
);
/*
 * Delete a user by his id
 */
export const deleteUser = catchAsync(
  async (request: Request, response: Response, next: NextFunction) => {
    const userId = request.params.id;
    const user = await UserService.deleteUser(userId);
    response.json({ status: 'success', data: { user } });
  }
);
/*
 * get all users
 */
export const getAllUsers = catchAsync(
  async (request: Request, response: Response, next: NextFunction) => {
    const users = await UserService.getAllUsers();
    response.json({ status: 'success', data: { length: users.length, users } });
  }
);
/*
 * get all users by his id
 */
export const getUser = catchAsync(
  async (request: Request, response: Response, next: NextFunction) => {
    const userId = request.params.id;
    const user = await UserService.getUser(userId);
    response.json({ status: 'success', data: { user } });
  }
);
