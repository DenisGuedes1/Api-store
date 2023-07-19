import {z} from "zod";
import {hashSync} from "bcryptjs";
export const createdUserSchema =z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().transform((pass)=>{
        return hashSync(pass,10)
    }),
    avatar: z.string().default(""),
    isAdmin: z.boolean().default(false),

})

export const returnCreatedUser = createdUserSchema.extend({
    id: z.number()
})

export const loginUserSchema = z.object({
    email: z.string().email(),
    password:z.string(),
})