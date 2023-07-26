import { getProductsByUserService } from "../../service/Bag/getCart.service";
import { Request, Response } from "express";

export const getProductsByUserController = async (
    req: Request,
    resp: Response
) => {
    const idUser = req.user.id;
    const get = await getProductsByUserService(idUser);

    return resp.json(get).status(200);
};
