import { Response, Request } from "express";
import { createdProductsService } from "../../service/products/postProducts.service";
export const createdProductsController = async(req:Request,resp: Response) =>{

    const data = req.body;
    const newProducts = await createdProductsService(data)
     return resp.json(newProducts)
}