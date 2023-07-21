import express, { Application } from "express";
import "express-async-errors";
import { handlreErrors } from "./error/handleError";
import productsRouter from "./router/routerProducts";
import cors from "cors";
import userRouter from "./router/router.user";
import userNotLogin from "./router/getProductsNotProtection";
import NotAdminRouter from "./router/routerUserNotAdmin.router";

const app: Application = express();
app.use(express.json());

app.use("/admin/products/", productsRouter);
app.use("/admin", userRouter);
app.use("/products", userNotLogin);
app.use("/store", NotAdminRouter);
app.use(handlreErrors);
app.use(cors());
export default app;
