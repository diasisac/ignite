import { Router } from "express";
import multer from "multer";
import { UpdateUserAvatarController } from "@modules/accounts/UpdateUSerAvatar/UpdateUserAvatarController";
import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import uploadConfig from "@config/upload";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();

const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/",createUserController.handle);
usersRoutes.patch("/avatar",uploadAvatar.single("avatar"),ensureAuthenticated,updateUserAvatarController.handle)

export {usersRoutes}