import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/user.entities";
import { Adresses } from "../../entities/address.entities";

export const getAllUSersService = async () => {
    const productsRepository = AppDataSource.getRepository(Users);
    const find = await productsRepository.find();
    for (const user of find) {
        if (user.adress) {
            const addressRepository = AppDataSource.getRepository(Adresses);
            const address = await addressRepository.findOne({
                where: { id: user.adress.id },
            });

            if (address) {
                user.adress = address;
            }
        }
    }
    return find;
};
