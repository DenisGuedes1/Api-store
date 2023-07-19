import { Request,Response} from "express";
import { getAllProductService } from "../../service/products/getProducts.service"; 

export const getAllproductsController = async(req:Request, resp:Response)=>{
    const getProducts = await getAllProductService()

    return resp.json(getProducts).status(200)
}