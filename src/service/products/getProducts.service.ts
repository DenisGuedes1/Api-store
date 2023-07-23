import { AppDataSource } from "../../data-source";
import { Products } from "../../entities/products.entities";

export const getAllProductService = async (): Promise<Products[]> => {
    const productsRepository = AppDataSource.getRepository(Products);
    const find = await productsRepository.find();

    return find;
};
