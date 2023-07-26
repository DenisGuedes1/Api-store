"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postProducts_controller_1 = require("../controlleer/products/postProducts.controller");
const middlewares_1 = require("../middleware/middlewares");
const schema_products_1 = require("../schema/schema.products");
const getAllproducts_1 = require("../controlleer/products/getAllproducts");
const updateProducts_controller_1 = require("../controlleer/products/updateProducts.controller");
const deleteProducts_1 = require("../controlleer/products/deleteProducts");
const productsRouter = (0, express_1.Router)();
productsRouter.post("", middlewares_1.veriFyTokenIsValid, middlewares_1.authorizationMiddleware, (0, middlewares_1.validateDataMiddleware)(schema_products_1.createdProducts), postProducts_controller_1.createdProductsController);
productsRouter.get("", middlewares_1.veriFyTokenIsValid, middlewares_1.authorizationMiddleware, getAllproducts_1.getAllproductsController);
productsRouter.patch("/:id", middlewares_1.veriFyTokenIsValid, middlewares_1.authorizationMiddleware, middlewares_1.checkProductIdMiddleware, updateProducts_controller_1.updateProductsController);
productsRouter.delete("/:id", middlewares_1.veriFyTokenIsValid, middlewares_1.checkProductIdMiddleware, middlewares_1.authorizationMiddleware, deleteProducts_1.deleteProductByIdController);
exports.default = productsRouter;