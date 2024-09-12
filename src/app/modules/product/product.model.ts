import mongoose, { Schema } from 'mongoose';
import { Product } from './product.interface';

const productSchema = new Schema<Product>(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      default: '',
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

const ProductModel = mongoose.model('Product', productSchema);

export default ProductModel;
