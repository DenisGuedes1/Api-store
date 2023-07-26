"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductsSchema = exports.returnCreatedProucts = exports.createdProducts = void 0;
const zod_1 = require("zod");
exports.createdProducts = zod_1.z.object({
    name: zod_1.z.string(),
    descricao: zod_1.z.string(),
    foto1: zod_1.z.string(),
    foto2: zod_1.z.string(),
    foto3: zod_1.z.string(),
    price: zod_1.z
        .number()
        .min(0)
        .max(999999.99)
        .transform((value) => Number(value.toFixed(2)))
        .refine((value) => Number.isFinite(value), {
        message: "O campo 'price' deve ser um número válido.",
    }),
    tamanho: zod_1.z.enum(["P", "M", "G", "GG"]).default("P"),
    promotion: zod_1.z.boolean().default(false),
    category: zod_1.z
        .enum([
        "Camisetas",
        "Camisas",
        "Calças",
        "Shorts",
        "Saias",
        "Vestidos",
        "Blazers",
        "Casacos",
        "Jaquetas",
        "Roupas íntimas",
        "Não definido",
    ])
        .default("Não definido"),
    gender: zod_1.z
        .enum(["Masculino", "Feminino", "Unissex", "Não informado"])
        .default("Não informado"),
});
exports.returnCreatedProucts = exports.createdProducts.extend({
    id: zod_1.z.string(),
});
exports.updateProductsSchema = zod_1.z
    .object({
    name: zod_1.z.string().optional(),
    descricao: zod_1.z.string().optional(),
    foto1: zod_1.z.string().optional(),
    foto2: zod_1.z.string().optional(),
    foto3: zod_1.z.string().optional(),
    price: zod_1.z.number().optional(),
    isActive: zod_1.z.boolean().default(true),
    quantity: zod_1.z.number().default(10),
    tamanho: zod_1.z
        .enum(["P", "M", "G", "GG"])
        .default("P")
        .optional()
        .nullable(),
    promotion: zod_1.z.boolean().default(false),
    category: zod_1.z
        .enum([
        "Camisetas",
        "Camisas",
        "Calças",
        "Shorts",
        "Saias",
        "Vestidos",
        "Blazers",
        "Casacos",
        "Jaquetas",
        "Roupas íntimas",
        "Não definido",
    ])
        .default("Não definido"),
    gender: zod_1.z
        .enum(["Masculino", "Feminino", "Unissex", "Não informado"])
        .default("Não informado"),
})
    .partial();
