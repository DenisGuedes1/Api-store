import {z} from "zod";
import { createdProducts,returnCreatedProucts, updateProductsSchema } from "../schema/schema.products";
import { createdUserSchema, returnCreatedUser,loginUserSchema } from "../schema/schema.user";
export type TreturnCreatedProducts = z.infer<typeof returnCreatedProucts>;
export type TcreatedProducts = z.infer<typeof createdProducts>

export type TcreatedUser = z.infer<typeof createdUserSchema>
export type TreturnCreateUser = z.infer <typeof returnCreatedUser>
export type TLoginUser = z.infer<typeof loginUserSchema>

export type TupdateProducts = z.infer<typeof updateProductsSchema>
