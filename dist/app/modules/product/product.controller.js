"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductControllers = void 0;
const product_service_1 = require("./product.service");
const product_validation_1 = require("./product.validation");
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { product: productData } = req.body;
        const zodParsedData = product_validation_1.productValidationSchema.parse(productData);
        const result = yield product_service_1.ProductService.addProductIntoDB(zodParsedData);
        res.status(200).json({
            success: true,
            message: 'Product Added Successfully',
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductService.getAllProductsFromDB();
        res.status(200).json({
            success: true,
            message: 'Product Retrived Successfully',
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.ProductControllers = {
    addProduct,
    getAllProducts,
};
