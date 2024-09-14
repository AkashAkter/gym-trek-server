import { Product } from './product.interface';
import ProductModel from './product.model';

const addProductIntoDB = async (productData: Product) => {
  // const result = await ProductModel.create(product);
  const product = new ProductModel(productData);
  const result = await product.save();

  return result;
};

const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

export const ProductService = {
  addProductIntoDB,
  getAllProductsFromDB,
};
