"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeCartService = void 0;
const data_source_1 = require("../../data-source");
const cart_entities_1 = require("../../entities/cart.entities");
const user_entities_1 = require("../../entities/user.entities");
const products_entities_1 = require("../../entities/products.entities");
const handleError_1 = require("../../error/handleError");
const removeCartService = (UserId, idProducts) => __awaiter(void 0, void 0, void 0, function* () {
    const cartRepository = data_source_1.AppDataSource.getRepository(cart_entities_1.Cart);
    const userRepository = data_source_1.AppDataSource.getRepository(user_entities_1.Users);
    const productRepository = data_source_1.AppDataSource.getRepository(products_entities_1.Products);
    const user = yield userRepository.findOne({
        where: {
            id: UserId,
        },
    });
    const product = yield productRepository.findOne({
        where: {
            id: idProducts,
        },
    });
    if (!user || !product) {
        throw new handleError_1.AppError("user or not products not found", 404);
    }
    const cartItem = yield cartRepository.findOne({
        where: {
            user: { id: UserId },
            product: { id: idProducts },
        },
    });
    if (!cartItem) {
        throw new handleError_1.AppError("product not found", 404);
    }
    yield cartRepository.remove(cartItem);
});
exports.removeCartService = removeCartService;
