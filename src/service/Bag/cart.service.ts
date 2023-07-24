import { AppDataSource } from "../../data-source";
import { Cart } from "../../entities/cart.entities";
import { Repository } from "typeorm";
import { Users } from "../../entities/user.entities";
import { Products } from "../../entities/products.entities";
import { AppError } from "../../error/handleError";

export const createdCartService = async (
    UserId: string,
    idProducts: string,
    quantity: number,
    price: number
) => {
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

    const products = await productRepository.findOne({
        where: {
            id: idProducts,
        },
    });

    if (!user || !products) {
        throw new AppError("user or not products not found", 404);
    }

    const totalPrice = quantity * price;

    const newItem = new Cart();
    newItem.user = user;
    newItem.product = products;
    newItem.price = price;
    newItem.quantity = quantity;
    const saveNewItem = await cartRepository.save(newItem);
    return saveNewItem;
};
