"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sendReseteEmailPassword_1 = require("../controlleer/user/sendReseteEmailPassword");
const validatedBody_middleware_1 = require("../middleware/validatedBody.middleware");
const schema_user_1 = require("../schema/schema.user");
const loginUser_controler_1 = require("../controlleer/user/loginUser.controler");
const checkEmail_middleware_1 = require("../middleware/checkEmail.middleware");
const createdUser_1 = require("../controlleer/user/createdUser");
const verifyTokenIsvalid_middleware_1 = require("../middleware/verifyTokenIsvalid.middleware");
const deleteUser_controller_1 = require("../controlleer/user/deleteUser.controller");
const updateUser_controller_1 = require("../controlleer/user/updateUser.controller");
const createdAdress_controller_1 = require("../controlleer/user/address/createdAdress.controller");
const updatedAddres_controller_1 = require("../controlleer/user/address/updatedAddres.controller");
const getUserForId_controller_1 = require("../controlleer/user/getUserForId.controller");
const cart_controller_1 = require("../controlleer/bag/cart.controller");
const schema_cart_1 = require("../schema/bag/schema.cart");
const removeCart_controller_1 = require("../controlleer/bag/removeCart.controller");
const getCart_controller_1 = require("../controlleer/bag/getCart.controller");
const NotAdminRouter = (0, express_1.Router)();
NotAdminRouter.post("/reset-password", sendReseteEmailPassword_1.sendEmailResetPasswordController);
NotAdminRouter.post("/login", (0, validatedBody_middleware_1.validateDataMiddleware)(schema_user_1.loginUserSchema), loginUser_controler_1.loginUserController);
NotAdminRouter.post("/addres", verifyTokenIsvalid_middleware_1.veriFyTokenIsValid, createdAdress_controller_1.createdAddresController);
NotAdminRouter.post("/register", checkEmail_middleware_1.checkEmailMiddle, (0, validatedBody_middleware_1.validateDataMiddleware)(schema_user_1.createdUserSchema), createdUser_1.createdUserController);
NotAdminRouter.get("/user", verifyTokenIsvalid_middleware_1.veriFyTokenIsValid, getUserForId_controller_1.getuserByIdController);
NotAdminRouter.patch("/updated-addres/:id", verifyTokenIsvalid_middleware_1.veriFyTokenIsValid, updatedAddres_controller_1.updatedAddresController);
NotAdminRouter.delete("/users/delete", verifyTokenIsvalid_middleware_1.veriFyTokenIsValid, deleteUser_controller_1.deleteUserController);
NotAdminRouter.patch("/update-user", verifyTokenIsvalid_middleware_1.veriFyTokenIsValid, updateUser_controller_1.updatedUserController);
NotAdminRouter.patch("/reset-password/:token", sendReseteEmailPassword_1.resetPasswordController);
NotAdminRouter.post("/car/:id", verifyTokenIsvalid_middleware_1.veriFyTokenIsValid, (0, validatedBody_middleware_1.validateDataMiddleware)(schema_cart_1.cartSchema), cart_controller_1.createdCartController);
NotAdminRouter.get("/car/", verifyTokenIsvalid_middleware_1.veriFyTokenIsValid, getCart_controller_1.getProductsByUserController);
NotAdminRouter.delete("/car/:id", verifyTokenIsvalid_middleware_1.veriFyTokenIsValid, removeCart_controller_1.removeCartController);
exports.default = NotAdminRouter;
