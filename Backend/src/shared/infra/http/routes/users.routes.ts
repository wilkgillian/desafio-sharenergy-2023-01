import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../../../../config/multer';
import { CreateUserController } from '../../../../modules/accounts/useCases/CreateUser/CreateUserController';
import { DeleteUserController } from '../../../../modules/users/useCases/deleteUserUseCase/DeleteUserController';
import { GetOneUserController } from '../../../../modules/users/useCases/getOneUser/GetOneUserController';
import { ListUsersController } from '../../../../modules/users/useCases/listUser/ListUserController';
import { UpdateUserImageController } from '../../../../modules/users/useCases/updateUserImage/UpdateUserImageController';
import { UpdateUserController } from '../../../../modules/users/useCases/updateUserUseCase/UpdateUserController';

const usersRoutes = Router();

const upload = multer(uploadConfig);

const createUserController = new CreateUserController();
const updateUsersController = new UpdateUserController();
const listUsersController = new ListUsersController();
const getOneUserController = new GetOneUserController();
const updateUserController = new UpdateUserController();
// const updateMovieBannerController = new UpdateMovieBannerController();
const updateUserImageController = new UpdateUserImageController();
const deleteUserController = new DeleteUserController();

usersRoutes.get('/', listUsersController.handle);
usersRoutes.get('/user', getOneUserController.handle);
usersRoutes.delete('/', deleteUserController.handle);
usersRoutes.put('/', upload.single('file'), updateUserController.handle);
usersRoutes.post('/create', upload.single('file'), createUserController.handle);
// usersRoutes.patch(
//   "/user",
//   upload.single("user"),
//   updateMovieBannerController.handle
// );
usersRoutes.patch(
  '/image',
  upload.single('image'),
  updateUserImageController.handle
);

usersRoutes.get('/update', updateUsersController.handle);

export { usersRoutes };
