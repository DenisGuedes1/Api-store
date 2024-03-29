import { Router } from "express";
import {
    validateDataMiddleware,
    veriFyTokenIsValid,
} from "../middleware/middlewares";
import { checkEmailMiddle } from "../middleware/middlewares";
import { createdUserController } from "../controlleer/user/createdUser";
import { createdUserSchema, loginUserSchema } from "../schema/schema.user";
import { loginUserController } from "../controlleer/user/loginUser.controler";
import { deleteUserController } from "../controlleer/user/deleteUser.controller";
import { getAllUserController } from "../controlleer/user/getAllusers";
import {
    resetPasswordController,
    sendEmailResetPasswordController,
} from "../controlleer/user/sendReseteEmailPassword";
import { createdAddresController } from "../controlleer/user/address/createdAdress.controller";
import { upload } from "../multer-config";
const userRouter: Router = Router();

userRouter.post(
    "/register",
    checkEmailMiddle,
    upload.single("avatar"),
    validateDataMiddleware(createdUserSchema),
    createdUserController
);
userRouter.post(
    "/login",
    validateDataMiddleware(loginUserSchema),
    loginUserController
);

userRouter.post("/user/addres", veriFyTokenIsValid, createdAddresController);
userRouter.post("/users/reset-password", sendEmailResetPasswordController);
userRouter.get("/list-users", getAllUserController);
userRouter.delete("/users/delete", veriFyTokenIsValid, deleteUserController);
userRouter.patch("/reset-password/:token", resetPasswordController);
export default userRouter;
