import { PrismaClient } from '@prisma/client';

// define prisma client
class Prisma {
  private static prisma: PrismaClient;
  private constructor() {}
  static getPrismaClient(): PrismaClient {
    if (!this.prisma) this.prisma = new PrismaClient();
    return this.prisma;
  }
}

export default Prisma;
