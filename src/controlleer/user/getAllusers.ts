import { Request, Response } from "express";
import { getAllUSersService } from "../../service/user/getAllUsers";

export const getAllUserController = async (req: Request, resp: Response) => {
    const getProducts = await getAllUSersService();

    return resp.json(getProducts).status(200);
};
