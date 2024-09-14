import mongoose, { Schema } from 'mongoose';
import { Product } from './product.interface';

const productSchema = new Schema<Product>(
  {
    name: {
      type: String,
      required: true,
    },
    currentPrice: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    productFeatures: {
      type: [String], // Array of strings for product features
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    categoryBanner: {
      type: String,
      required: true,
    },
    bannerImage: {
      type: String,
      required: true,
    },
    moreImages: {
      type: [String], // Array of image URLs
      required: true,
    },
    stockQuantity: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  },
);

const ProductModel = mongoose.model('Product', productSchema);
export default ProductModel;
