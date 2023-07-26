"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartSchema = void 0;
const zod_1 = require("zod");
exports.cartSchema = zod_1.z.object({
    quantity: zod_1.z.number().default(1),
    price: zod_1.z
        .number()
        .min(0)
        .max(999999.99)
        .transform((value) => Number(value.toFixed(2)))
        .refine((value) => Number.isFinite(value), {
        message: "O campo 'price' deve ser um número válido.",
    }),
});
