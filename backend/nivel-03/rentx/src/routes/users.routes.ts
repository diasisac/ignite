import { Router } from "express";
import multer from "multer";
import { UpdateUserAvatarController } from "../modules/accounts/UpdateUSerAvatar/UpdateUserAvatarController";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";

const usersRoutes = Router();

const upload = multer({
    dest:"./avatar"
})

const createUserController = new CreateUserController();

const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/",createUserController.handle);
usersRoutes.patch("/avatar",upload.single("file"),updateUserAvatarController.handle)

export {usersRoutes}