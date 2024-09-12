import { Request, Response } from 'express';
import { ProductService } from './product.service';
import { productValidationSchema } from './product.validation';

const addProduct = async (req: Request, res: Response) => {
  try {
    // Directly use req.body as product data
    const productData = req.body;

    if (!productData) {
      return res.status(400).json({
        success: false,
        message: 'Product data is required',
      });
    }

    // Validate the product data
    const zodParsedData = productValidationSchema.parse(productData);

    // Add the product to the database
    const result = await ProductService.addProductIntoDB(zodParsedData);

    // Respond with success
    res.status(200).json({
      success: true,
      message: 'Product Added Successfully',
      data: result,
    });
  } catch (err) {
    // Log the error and send a response with error details
    console.error('Error adding product:', err);
    res.status(500).json({
      success: false,
      message: 'An error occurred while adding the product',
      error: err instanceof Error ? err.message : 'Unknown error',
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    // Retrieve all products from the database
    const result = await ProductService.getAllProductsFromDB();

    // Respond with success
    res.status(200).json({
      success: true,
      message: 'Products Retrieved Successfully',
      data: result,
    });
  } catch (err) {
    // Log the error and send a response with error details
    console.error('Error retrieving products:', err);
    res.status(500).json({
      success: false,
      message: 'An error occurred while retrieving products',
      error: err instanceof Error ? err.message : 'Unknown error',
    });
  }
};

export const ProductControllers = {
  addProduct,
  getAllProducts,
};
