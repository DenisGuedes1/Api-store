import { Router } from "express";
import { createdProductsController } from "../controlleer/products/postProducts.controller";
import {
    validateDataMiddleware,
    veriFyTokenIsValid,
    authorizationMiddleware,
    checkProductIdMiddleware,
} from "../middleware/middlewares";
import { createdProducts } from "../schema/schema.products";
import { getAllproductsController } from "../controlleer/products/getAllproducts";
import { updateProductsController } from "../controlleer/products/updateProducts.controller";
import { deleteProductByIdController } from "../controlleer/products/deleteProducts";
const productsRouter: Router = Router();

productsRouter.post(
    "",
    veriFyTokenIsValid,
    authorizationMiddleware,
    validateDataMiddleware(createdProducts),
    createdProductsController
);
productsRouter.get(
    "",
    veriFyTokenIsValid,
    authorizationMiddleware,
    getAllproductsController
);
productsRouter.patch(
    "/:id",
    veriFyTokenIsValid,
    authorizationMiddleware,
    checkProductIdMiddleware,
    updateProductsController
);
productsRouter.delete(
    "/:id",
    veriFyTokenIsValid,
    checkProductIdMiddleware,
    authorizationMiddleware,
    deleteProductByIdController
);

export default productsRouter;
