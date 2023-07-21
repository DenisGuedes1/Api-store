import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/user";

export const getAllUSersService = async (): Promise<Users[]> => {
    const productsRepository = AppDataSource.getRepository(Users);
    const find = await productsRepository.find();

    return find;
};
