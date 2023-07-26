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
exports.updateProductsController = void 0;
const updateProducts_service_1 = require("../../service/products/updateProducts.service");
const updateProductsController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const idProducts = req.params.id;
    const body = req.body;
    const update = yield (0, updateProducts_service_1.updateProductsService)(body, idProducts);
    return resp.json(update).status(201);
});
exports.updateProductsController = updateProductsController;
