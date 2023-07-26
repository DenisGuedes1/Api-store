import { removeCartService } from "../../service/Bag/removeCart.service";
import { Request, Response } from "express";

export const removeCartController = async (
    req: Request,
    resp: Response
): Promise<Response> => {
    const idUser = req.user.id;
    const idProducts = req.params.id;
    await removeCartService(idUser, idProducts);

    return resp.status(204).send();
};
