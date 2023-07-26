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
exports.getAllProductService = void 0;
const data_source_1 = require("../../data-source");
const products_entities_1 = require("../../entities/products.entities");
const getAllProductService = () => __awaiter(void 0, void 0, void 0, function* () {
    const productsRepository = data_source_1.AppDataSource.getRepository(products_entities_1.Products);
    const find = yield productsRepository.find();
    return find;
});
exports.getAllProductService = getAllProductService;
