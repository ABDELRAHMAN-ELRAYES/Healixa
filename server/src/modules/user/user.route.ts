import { Router } from 'express';
import {
  deleteUser,
  getAllUsers,
  getUser,
  saveUser,
  updateUser,
} from './user.controller';

const UserRouter = Router();

UserRouter.route('/').post(saveUser).get(getAllUsers);
UserRouter.route('/:id').get(getUser).delete(deleteUser).put(updateUser);

export default UserRouter;
