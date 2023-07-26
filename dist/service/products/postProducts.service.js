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
exports.createdProductsService = void 0;
const data_source_1 = require("../../data-source");
const schema_products_1 = require("../../schema/schema.products");
const products_entities_1 = require("../../entities/products.entities");
const createdProductsService = (dataProducts) => __awaiter(void 0, void 0, void 0, function* () {
    const newProduct = data_source_1.AppDataSource.getRepository(products_entities_1.Products).create(dataProducts);
    yield data_source_1.AppDataSource.getRepository(products_entities_1.Products).save(newProduct);
    const verifyFieldsProducts = schema_products_1.returnCreatedProucts.parse(newProduct);
    return verifyFieldsProducts;
});
exports.createdProductsService = createdProductsService;
