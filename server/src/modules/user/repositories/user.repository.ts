import Prisma from '../../../prisma-client/prisma-client';
import { PrismaClient } from '@prisma/client';
import { IUser } from '../Interfaces/IUser';

class UserRepository {
  private prisma: PrismaClient;
  constructor() {
    // initialize a prisma client to perform interactions with DB
    this.prisma = Prisma.getPrismaClient();
  }

  addUser(userData: IUser) {
    return this.prisma.user.create({ data: userData });
  }
  getAllUsers() {
    return this.prisma.user.findMany();
  }
  getUser(userId: string) {
    return this.prisma.user.findFirst({ where: { id: userId } });
  }
  updateUser(userData: IUser) {
    const { id } = userData;
    return this.prisma.user.update({ where: { id }, data: userData });
  }
  deleteUser(userId: string) {
    return this.prisma.user.delete({ where: { id: userId } });
  }
}
export default UserRepository;
