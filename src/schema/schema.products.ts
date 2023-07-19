import {z} from "zod";

export const createdProducts = z.object({
   name: z.string(),
   descricao: z.string(),
   foto1: z.string(),
   foto2: z.string(),
   foto3: z.string(),
   price: z
   .number()
   .min(0)
   .max(999999.99) 
   .transform((value) => Number(value.toFixed(2))) 
   .refine((value) => Number.isFinite(value), {
     message: "O campo 'price' deve ser um número válido.",
   }),
   tamanho: z.enum(["P", "M", "G", "GG"]).default("P"),

})

export const returnCreatedProucts = createdProducts.extend({
    id: z.number()
})
export const updateProductsSchema = z
.object({
  name: z.string().optional(),
  descricao: z.string().optional(),
  foto1: z.string().optional(),
  foto2: z.string().optional(),
  foto3: z.string().optional(),
  price: z.number().optional(),
  isActive: z.boolean().default(true),
  quantity: z.number().default(10),
  tamanho: z.enum(["P", "M", "G", "GG"]).default("P").optional().nullable(),
})
.partial();
