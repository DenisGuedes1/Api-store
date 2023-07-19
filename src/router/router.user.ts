import { Router } from "express";
import { validateDataMiddleware } from "../middleware/middlewares";
import { checkEmailMiddle } from "../middleware/middlewares";
import { createdUserController } from "../controlleer/user/createdUser";
import { createdUserSchema, loginUserSchema } from "../schema/schema.user";
import { loginUserController } from "../controlleer/user/loginUser.controler";

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
export default userRouter;
