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
exports.createdAddresController = void 0;
const createdAddress_service_1 = require("../../../service/user/address/createdAddress.service");
const createdAddresController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.user.id;
    const body = req.body;
    const created = yield (0, createdAddress_service_1.createdAddresService)(userId, body);
    return resp.json(created).status(201);
});
exports.createdAddresController = createdAddresController;
