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

const userRouter: Router = Router();

userRouter.post(
    "/register",
    checkEmailMiddle,
    validateDataMiddleware(createdUserSchema),
    createdUserController
);
userRouter.post(
    "/login",
    validateDataMiddleware(loginUserSchema),
    loginUserController
);
userRouter.delete("/users/delete", veriFyTokenIsValid, deleteUserController);
export default userRouter;
