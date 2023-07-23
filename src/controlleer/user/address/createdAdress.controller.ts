import { createdAddresService } from "../../../service/user/address/createdAddress.service";
import { Request, Response } from "express";
export const createdAddresController = async (req: Request, resp: Response) => {
    const userId = req.user.id;
    const body = req.body;
    const created = await createdAddresService(userId, body);

    return resp.json(created).status(201);
};
