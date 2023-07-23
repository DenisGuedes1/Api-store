import { Router } from "express";
import {
    resetPasswordController,
    sendEmailResetPasswordController,
} from "../controlleer/user/sendReseteEmailPassword";
import { validateDataMiddleware } from "../middleware/validatedBody.middleware";
import { createdUserSchema, loginUserSchema } from "../schema/schema.user";
import { loginUserController } from "../controlleer/user/loginUser.controler";
import { checkEmailMiddle } from "../middleware/checkEmail.middleware";
import { createdUserController } from "../controlleer/user/createdUser";
import { veriFyTokenIsValid } from "../middleware/verifyTokenIsvalid.middleware";
import { deleteUserController } from "../controlleer/user/deleteUser.controller";
import { updatedUserController } from "../controlleer/user/updateUser.controller";
import { createdAddresController } from "../controlleer/user/address/createdAdress.controller";
import { updatedAddresController } from "../controlleer/user/address/updatedAddres.controller";
import { getuserByIdController } from "../controlleer/user/getUserForId.controller";

const NotAdminRouter: Router = Router();

NotAdminRouter.post("/reset-password", sendEmailResetPasswordController);
NotAdminRouter.post(
    "/login",
    validateDataMiddleware(loginUserSchema),
    loginUserController
);
NotAdminRouter.post("/addres", veriFyTokenIsValid, createdAddresController);
NotAdminRouter.post(
    "/register",
    checkEmailMiddle,
    validateDataMiddleware(createdUserSchema),
    createdUserController
);
NotAdminRouter.get("/user", veriFyTokenIsValid, getuserByIdController);
NotAdminRouter.patch(
    "/updated-addres/:id",
    veriFyTokenIsValid,
    updatedAddresController
);
NotAdminRouter.delete(
    "/users/delete",
    veriFyTokenIsValid,
    deleteUserController
);
NotAdminRouter.patch("/update-user", veriFyTokenIsValid, updatedUserController);
NotAdminRouter.patch("/reset-password/:token", resetPasswordController);
export default NotAdminRouter;
