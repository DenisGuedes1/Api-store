import { Router } from "express";
import { getAllproductsController } from "../controlleer/products/getAllproducts";

const userNotLogin: Router = Router()

userNotLogin.get("", getAllproductsController)

export default userNotLogin