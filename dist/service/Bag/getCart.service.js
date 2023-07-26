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
exports.getProductsByUserService = void 0;
// Importe as entidades e o repositório apropriado
const data_source_1 = require("../../data-source");
const cart_entities_1 = require("../../entities/cart.entities");
const user_entities_1 = require("../../entities/user.entities");
const handleError_1 = require("../../error/handleError");
const getProductsByUserService = (UserId) => __awaiter(void 0, void 0, void 0, function* () {
    const cartRepository = data_source_1.AppDataSource.getRepository(cart_entities_1.Cart);
    const userRepository = data_source_1.AppDataSource.getRepository(user_entities_1.Users);
    const user = yield userRepository.findOne({
        where: {
            id: UserId,
        },
    });
    if (!user) {
        throw new handleError_1.AppError("User not found", 404);
    }
    const cartItems = yield cartRepository.find({
        where: {
            user: { id: UserId },
        },
        relations: ["product"],
    });
    const products = cartItems.map((cartItem) => ({
        id: cartItem.product.id,
        price: cartItem.product.price,
        foto: cartItem.product.foto1,
        quantity: cartItem.quantity,
    }));
    return products;
});
exports.getProductsByUserService = getProductsByUserService;
