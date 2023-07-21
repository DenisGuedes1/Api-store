import { Request, Response } from "express";
import { createdUserService } from "../../service/user/createdUser.service";

export const createdUserController = async (req: Request, resp: Response) => {
    const data = req.body;
    console.log(data);
    const newUser = await createdUserService(data);
    console.log(newUser, "newUser");
    return resp.json(newUser).status(201);
};
