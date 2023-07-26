import { AppDataSource } from "../../data-source";
import { Cart } from "../../entities/cart.entities";
import { Repository } from "typeorm";
import { Users } from "../../entities/user.entities";
import { Products } from "../../entities/products.entities";
import { AppError } from "../../error/handleError";

export const removeCartService = async (UserId: string, idProducts: string) => {
    const cartRepository: Repository<Cart> = AppDataSource.getRepository(Cart);
    const userRepository: Repository<Users> =
        AppDataSource.getRepository(Users);
    const productRepository: Repository<Products> =
        AppDataSource.getRepository(Products);

    const user = await userRepository.findOne({
        where: {
            id: UserId,
        },
    });

    const product = await productRepository.findOne({
        where: {
            id: idProducts,
        },
    });

    if (!user || !product) {
        throw new AppError("user or not products not found", 404);
    }

    const cartItem = await cartRepository.findOne({
        where: {
            user: { id: UserId },
            product: { id: idProducts },
        },
    });

    if (!cartItem) {
        throw new AppError("product not found", 404);
    }

    await cartRepository.remove(cartItem);
};
