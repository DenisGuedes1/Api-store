import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Products } from "../../entities/products";
import { AppError } from "../../error/handleError";



export const deleteProductByIdService = async(idProduct:number):Promise<void> =>{

    const productsRepository: Repository<Products> = AppDataSource.getRepository(Products);

    const findProducts = await productsRepository.findOne({where:{id: idProduct}});
    if(!idProduct){
        throw new AppError("Id not found", 404)
    }else{
        await productsRepository.delete({id:idProduct})
    }
}
