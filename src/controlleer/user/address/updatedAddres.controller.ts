import { updateAddresService } from "../../../service/user/address/updatedAddress.service";
import { Request, Response } from "express";

export const updatedAddresController = async (req: Request, resp: Response) => {
    const idAddres = req.params.id;
    const body = req.body;
    const updated = await updateAddresService(body, idAddres);
    return resp.json(updated).status(200);
};
