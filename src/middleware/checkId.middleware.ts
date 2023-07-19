import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Products } from "../entities/products";

export const checkProductIdMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const productId = Number(req.params.id);

    if (isNaN(productId)) {
        return res.status(400).json({ message: "ID not found." });
    }

    const productRepository = AppDataSource.getRepository(Products);

    try {
        const product = await productRepository.findOne({
            where: { id: productId },
        });

        if (!product) {
            return res.status(404).json({ message: "Product not found." });
        }
    } catch (error) {
        return res
            .status(500)
            .json({ message: "Erro ao buscar o produto no banco de dados." });
    }

    next();
};
