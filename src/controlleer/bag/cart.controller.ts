import { cartSchema } from "../../schema/bag/schema.cart";
import { createdCartService } from "../../service/Bag/cart.service";
import { Request, Response } from "express";
export const createdCartController = async (req: Request, resp: Response) => {
    const idUser = req.user.id;
    const idProducts = req.params.id;
    const { price, quantity } = req.body;
    const created = await createdCartService(
        idUser,
        idProducts,
        quantity,
        price
    );

    return resp.json(created).status(201);
};
