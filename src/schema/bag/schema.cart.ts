import { z } from "zod";

export const cartSchema = z.object({
    quantity: z.number().default(1),
    price: z
        .number()
        .min(0)
        .max(999999.99)
        .transform((value) => Number(value.toFixed(2)))
        .refine((value) => Number.isFinite(value), {
            message: "O campo 'price' deve ser um número válido.",
        }),
});
