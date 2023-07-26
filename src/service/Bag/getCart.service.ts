// Importe as entidades e o repositório apropriado
import { AppDataSource } from "../../data-source";
import { Cart } from "../../entities/cart.entities";
import { Repository } from "typeorm";
import { Users } from "../../entities/user.entities";
import { Products } from "../../entities/products.entities";
import { AppError } from "../../error/handleError";

export const getProductsByUserService = async (UserId: string) => {
    const cartRepository: Repository<Cart> = AppDataSource.getRepository(Cart);

    const userRepository: Repository<Users> =
        AppDataSource.getRepository(Users);
    const user = await userRepository.findOne({
        where: {
            id: UserId,
        },
    });

    if (!user) {
        throw new AppError("User not found", 404);
    }

    const cartItems = await cartRepository.find({
        where: {
            user: { id: UserId },
        },
        relations: ["product"],
    });

    const products = cartItems.map((cartItem) => ({
        id: cartItem.product.id,
        price: cartItem.product.price,
        foto: cartItem.product.foto1,
        quantity: cartItem.quantity,
    }));

    return products;
};
