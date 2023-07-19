import { Request, Response } from "express";
import { updateProductsService } from "../../service/products/updateProducts.service";
export const updateProductsController = async (req:Request, resp:Response)=>{
    const idProducts = parseInt(req.params.id)
    const body = req.body;
    const update = await updateProductsService(body, idProducts)
    return resp.json(update).status(201)
}