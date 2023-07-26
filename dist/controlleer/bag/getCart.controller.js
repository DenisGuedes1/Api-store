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
exports.getProductsByUserController = void 0;
const getCart_service_1 = require("../../service/Bag/getCart.service");
const getProductsByUserController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const idUser = req.user.id;
    const get = yield (0, getCart_service_1.getProductsByUserService)(idUser);
    return resp.json(get).status(200);
});
exports.getProductsByUserController = getProductsByUserController;
