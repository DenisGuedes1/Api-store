import { AppDataSource } from "../../../data-source";
import { TcreatedAddresUSer } from "../../../interface/interfaceProducts";
import { Repository } from "typeorm";
import { Adresses } from "../../../entities/address.entities";
import { Users } from "../../../entities/user.entities";
import { AppError } from "../../../error/handleError";

export const createdAddresService = async (
    idUser: string,
    addresData: TcreatedAddresUSer
) => {
    const userRepository: Repository<Users> =
        AppDataSource.getRepository(Users);
    const userFind = await userRepository.findOne({
        where: { id: idUser },
    });
    if (!userFind) {
        throw new AppError("User not found.", 404);
    }
    const newAddres: Adresses =
        AppDataSource.getRepository(Adresses).create(addresData);

    newAddres.user = userFind;
    const newAddresReturn = await AppDataSource.getRepository(Adresses).save(
        newAddres
    );

    return newAddresReturn;
};
