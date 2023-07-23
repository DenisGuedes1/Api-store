import { z } from "zod";
import { hashSync } from "bcryptjs";
import { Adresses } from "../entities/address.entities";
export const createdUserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().transform((pass) => {
        return hashSync(pass, 10);
    }),
    avatar: z.string().default(""),
    isAdmin: z.boolean().default(false),
    reset_token: z.string().nullable().default(null),
});

export const returnCreatedUser = createdUserSchema.extend({
    id: z.string(),
});

export const loginUserSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});
export const UpdatedUserSchema = z
    .object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().transform((pass) => {
            return hashSync(pass, 10);
        }),
        avatar: z.string().default(""),
        isAdmin: z.boolean().default(false),
        reset_token: z.string().nullable(),
    })
    .partial();

export const createdAddreSchema = z.object({
    street: z.string().min(1).max(45),
    zipCode: z.string().regex(/^\d{5}-\d{3}$/),
    number: z.string().max(6),
    city: z.string().min(1).max(20),
    state: z.string().length(2),
});
export const updatedAddreSchema = z
    .object({
        street: z.string().min(1).max(45),
        zipCode: z.string().regex(/^\d{5}-\d{3}$/),
        number: z.string().max(6),
        city: z.string().min(1).max(20),
        state: z.string().length(2),
    })
    .partial();
export const createdUserWithAddress = z.object({
    user: createdUserSchema,
    address: createdAddreSchema,
});
