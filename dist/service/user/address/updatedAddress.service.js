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
exports.updateAddresService = void 0;
const data_source_1 = require("../../../data-source");
const address_entities_1 = require("../../../entities/address.entities");
const handleError_1 = require("../../../error/handleError");
const schema_user_1 = require("../../../schema/schema.user");
const updateAddresService = (userData, idAddres) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(address_entities_1.Adresses);
    const userFind = yield userRepository.findOne({
        where: { id: idAddres },
    });
    if (!userFind) {
        throw new handleError_1.AppError("User not exist", 404);
    }
    const updatedUser = userRepository.merge(userFind, userData);
    yield userRepository.save(updatedUser);
    const newUser = schema_user_1.updatedAddreSchema.parse(userData);
    return newUser;
});
exports.updateAddresService = updateAddresService;
// export const addresUpdateService = async (
//     idAddres: string,
//     dataAddres: Partial<TupdatedAddres>
// ) => {
//     const addresRepository =
//         AppDataSource.getRepository<Partial<TupdatedAddres>>(Adresses);
//     try {
//         // const findAddress = await addresRepository.findOne({
//         //     where: { id: idAddres },
//         // });
//         const findAddress = await addresRepository.findOne({
//             where: { id: idAddres },
//         } as FindOneOptions<Adresses>);
//         if (!findAddress) {
//             throw new AppError("Address not found", 404);
//         }
//         const updatedAddress = addresRepository.merge(findAddress, dataAddres);
//         await addresRepository.save(updatedAddress);
//         const newUserAddres = createdAddreSchema.parse(updatedAddress);
//         return newUserAddres;
//     } catch (error) {
//         console.log(error);
//         throw new AppError("Failed to update address", 500);
//     }
// };
