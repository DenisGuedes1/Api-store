import { Products } from "../../entities/products.entities";
import { AppDataSource } from "../../data-source";
import {
    TreturnCreatedProducts,
    TupdateProducts,
} from "../../interface/interfaceProducts";
import { AppError } from "../../error/handleError";
import { Repository } from "typeorm";
import { updateProductsSchema } from "../../schema/schema.products";
export const updateProductsService = async (
    productsData: Partial<TreturnCreatedProducts>,
    idProducts: string
) => {
    const productsRepository: Repository<Products> =
        AppDataSource.getRepository(Products);

    const findProducts = await productsRepository.findOne({
        where: { id: idProducts },
    });

    if (!findProducts) {
        throw new AppError("Id not found", 404);
    }
    const updated = productsRepository.merge(findProducts, productsData!);

    await productsRepository.save(updated);

    const newProducts = updateProductsSchema.parse(productsData);

    return newProducts;
};
