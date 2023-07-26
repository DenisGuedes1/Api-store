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
exports.createdAddresService = void 0;
const data_source_1 = require("../../../data-source");
const address_entities_1 = require("../../../entities/address.entities");
const user_entities_1 = require("../../../entities/user.entities");
const handleError_1 = require("../../../error/handleError");
const createdAddresService = (idUser, addresData) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(user_entities_1.Users);
    const userFind = yield userRepository.findOne({
        where: { id: idUser },
    });
    if (!userFind) {
        throw new handleError_1.AppError("User not found.", 404);
    }
    const newAddres = data_source_1.AppDataSource.getRepository(address_entities_1.Adresses).create(addresData);
    newAddres.user = userFind;
    const newAddresReturn = yield data_source_1.AppDataSource.getRepository(address_entities_1.Adresses).save(newAddres);
    return newAddresReturn;
});
exports.createdAddresService = createdAddresService;
