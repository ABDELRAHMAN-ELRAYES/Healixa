import { IUser } from '../Interfaces/IUser';
import { generateUserId } from '../../../utils/user-data-handler';
import { hash } from '../../../utils/hashing-handler';
import UserRepository from '../repositories/user.repository';
import { NextFunction } from 'express';
import AppError from '../../../utils/app-error';

const userRepository = new UserRepository();

class UserService {
  /*
   * Create User Service
   */
  static async saveUser(userData: any) {
    const userType = userData.type;
    const userId = generateUserId(userType);
    const hashedPassword = await hash(userData.password);
    const data: IUser = {
      id: userId,
      email: userData.email,
      password: hashedPassword,
    };
    return userRepository.addUser(data);
  }
  /*
   * Update User Service
   */
  static async updateUser(updatedData: any, next: NextFunction) {
    const { userId, ...newData } = updatedData;
    const user = await this.getUser(userId, next);
    if(!user) return;
    const userData: IUser = {
      ...user,
      ...newData,
    };
    return userRepository.updateUser(userData);
  }
  /*
   * Delete User Service
   */
  static async deleteUser(userId: string, next: NextFunction) {
    const user = await this.getUser(userId, next);
    if(!user) return;
    return userRepository.deleteUser(userId);
  }
  /*
   * Get all users Service
   */
  static async getAllUsers() {
    return userRepository.getAllUsers();
  }
  /*
   * Get user Service
   */
  static async getUser(userId: string, next: NextFunction) {
    const user = await userRepository.getUser(userId);
    if (!user) {
       next(
        new AppError(
          404,
          `User with ID : ${userId} is not found, use a valid ID and try again!`
        )
        
      );
      return;
    }
    return user;
  }
}
export default UserService;
