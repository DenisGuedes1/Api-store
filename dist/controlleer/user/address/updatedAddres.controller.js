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
exports.updatedAddresController = void 0;
const updatedAddress_service_1 = require("../../../service/user/address/updatedAddress.service");
const updatedAddresController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const idAddres = req.params.id;
    const body = req.body;
    const updated = yield (0, updatedAddress_service_1.updateAddresService)(body, idAddres);
    return resp.json(updated).status(200);
});
exports.updatedAddresController = updatedAddresController;
