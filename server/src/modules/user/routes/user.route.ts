import { Router } from 'express';
import {
  deleteUser,
  getAllUsers,
  getUser,
  saveUser,
  updateUser,
} from '../controllers/user.controller';

const userRouter = Router();

userRouter.route('/').post(saveUser).get(getAllUsers);
userRouter.route('/:id').get(getUser).delete(deleteUser).put(updateUser);

export default userRouter;
