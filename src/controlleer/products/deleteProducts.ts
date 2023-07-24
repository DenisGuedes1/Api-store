import { Response, Request } from "express";
import { deleteProductByIdService } from "../../service/products/deleteProducts";

export const deleteProductByIdController = async (
    req: Request,
    resp: Response
) => {
    const idProduct = req.params.id;

    await deleteProductByIdService(idProduct);

    return resp.status(204).send();
};
