import { z } from "zod";
import {
    createdProducts,
    returnCreatedProucts,
    updateProductsSchema,
} from "../schema/schema.products";
import {
    createdUserSchema,
    returnCreatedUser,
    loginUserSchema,
    createdAddreSchema,
    createdUserWithAddress,
    updatedAddreSchema,
} from "../schema/schema.user";
export type TreturnCreatedProducts = z.infer<typeof returnCreatedProucts>;
export type TcreatedProducts = z.infer<typeof createdProducts>;

export type TcreatedUser = z.infer<typeof createdUserSchema>;
export type TreturnCreateUser = z.infer<typeof returnCreatedUser>;
export type TLoginUser = z.infer<typeof loginUserSchema>;

export type TupdateProducts = z.infer<typeof updateProductsSchema>;
export type TcreatedAddresUSer = z.infer<typeof createdAddreSchema>;
export type TreturnGet = z.infer<typeof createdUserWithAddress>;
export type TupdatedAddres = z.infer<typeof updatedAddreSchema>;
export interface IcreatedAddresUSer {
    number?: string;
    street?: string;
    zipCode?: string;
    city?: string;
    state?: string;
}
export interface IemailRequest {
    to: string;
    subject: string;
    text: string;
}
