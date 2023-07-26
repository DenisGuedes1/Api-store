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
exports.getAllUSersService = void 0;
const data_source_1 = require("../../data-source");
const user_entities_1 = require("../../entities/user.entities");
const address_entities_1 = require("../../entities/address.entities");
const getAllUSersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const productsRepository = data_source_1.AppDataSource.getRepository(user_entities_1.Users);
    const find = yield productsRepository.find();
    for (const user of find) {
        if (user.adress) {
            const addressRepository = data_source_1.AppDataSource.getRepository(address_entities_1.Adresses);
            const address = yield addressRepository.findOne({
                where: { id: user.adress.id },
            });
            if (address) {
                user.adress = address;
            }
        }
    }
    return find;
});
exports.getAllUSersService = getAllUSersService;
