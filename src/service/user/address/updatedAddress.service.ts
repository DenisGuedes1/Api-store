import { AppDataSource } from "../../../data-source";
import {
    TcreatedAddresUSer,
    TupdatedAddres,
} from "../../../interface/interfaceProducts";
import { Repository } from "typeorm";
import { Adresses } from "../../../entities/address.entities";
import { AppError } from "../../../error/handleError";
import { updatedAddreSchema } from "../../../schema/schema.user";

export const updateAddresService = async (
    userData: Partial<TcreatedAddresUSer>,
    idAddres: string
) => {
    const userRepository: Repository<Adresses> =
        AppDataSource.getRepository(Adresses);
    const userFind = await userRepository.findOne({
        where: { id: idAddres },
    });

    if (!userFind) {
        throw new AppError("User not exist", 404);
    }

    const updatedUser = userRepository.merge(userFind, userData);
    await userRepository.save(updatedUser);
    const newUser = updatedAddreSchema.parse(userData);
    return newUser;
};

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
