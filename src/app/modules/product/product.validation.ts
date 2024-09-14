import { z } from 'zod';

export const productValidationSchema = z.object({
  name: z.string({ message: 'product name is required' }), // 'name' field validation
  currentPrice: z.number({ message: 'current price is required' }).positive(),
  price: z
    .number({ message: 'product price is required as number' })
    .positive(),
  description: z.string({ message: 'product description is required' }),
  productFeatures: z
    .array(z.string())
    .nonempty({ message: 'at least one feature is required' }), // Array validation
  category: z.string({ message: 'product category is required' }),
  categoryBanner: z.string({ message: 'category banner is required' }),
  bannerImage: z.string({ message: 'banner image is required' }),
  moreImages: z
    .array(z.string())
    .nonempty({ message: 'at least one image is required' }), // Array validation
  stockQuantity: z
    .number({ message: 'product stock is required as number' })
    .min(0),
  tag: z.string().optional(),
});

export const updateProductValidationSchema = z.object({
  name: z.string().optional(),
  currentPrice: z.number().positive().optional(),
  price: z.number().positive().optional(),
  description: z.string().optional(),
  productFeatures: z.array(z.string()).optional(),
  category: z.string().optional(),
  categoryBanner: z.string().optional(),
  bannerImage: z.string().optional(),
  moreImages: z.array(z.string()).optional(),
  stockQuantity: z.number().min(0).optional(),
});

const confirmOrderValidationSchema = z.object({
  quantity: z.number().int().positive(),
  _id: z.string(),
});

export const productOrderBodySchema = z.object({
  cartItems: z.array(confirmOrderValidationSchema),
});
