"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = require("express");
const validator_1 = require("../../middleware/validator");
const product_controller_1 = require("./product.controller");
const product_validation_1 = require("./product.validation");
const router = (0, express_1.Router)();
router.get('/', product_controller_1.getAllProduct);
router.get('/featured', product_controller_1.getFeaturedProduct);
router.get('/get/:id', product_controller_1.getSingleProduct);
router.post('/create', (0, validator_1.validSchema)(product_validation_1.productValidationSchema), product_controller_1.createProduct);
router.put('/update/:id', (0, validator_1.validSchema)(product_validation_1.updateProductValidationSchema), product_controller_1.updateProductByIdController);
router.delete('/delete/:id', product_controller_1.deleteProductByIdController);
router.post('/order-many', (0, validator_1.validSchema)(product_validation_1.productOrderBodySchema), product_controller_1.confirmManyProductOrderController);
exports.ProductRoutes = router;
