import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import {
    createdProducts,
    returnCreatedProucts,
} from "../../schema/schema.products";
import {
    TcreatedProducts,
    TreturnCreatedProducts,
} from "../../interface/interfaceProducts";
import { Products } from "../../entities/products.entities";

export const createdProductsService = async (
    dataProducts: TcreatedProducts
): Promise<TreturnCreatedProducts> => {
    const newProduct: Products =
        AppDataSource.getRepository(Products).create(dataProducts);
    await AppDataSource.getRepository(Products).save(newProduct);

    const verifyFieldsProducts = returnCreatedProucts.parse(newProduct);

    return verifyFieldsProducts;
};
