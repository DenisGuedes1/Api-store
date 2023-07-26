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
exports.checkProductIdMiddleware = void 0;
const data_source_1 = require("../data-source");
const products_entities_1 = require("../entities/products.entities");
const checkProductIdMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.id;
    if (productId) {
        return res.status(400).json({ message: "ID not found." });
    }
    const productRepository = data_source_1.AppDataSource.getRepository(products_entities_1.Products);
    try {
        const product = yield productRepository.findOne({
            where: { id: productId },
        });
        if (!product) {
            return res.status(404).json({ message: "Product not found." });
        }
    }
    catch (error) {
        return res
            .status(500)
            .json({ message: "Erro ao buscar o produto no banco de dados." });
    }
    next();
});
exports.checkProductIdMiddleware = checkProductIdMiddleware;
