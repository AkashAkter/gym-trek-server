import express from 'express';
import { ProductRoutes } from '../modules/product/product.route';
import paymentRoute from '../modules/Payment/payment.route';

const router = express.Router();

const moduleRoute = [
  {
    path: '/product',
    route: ProductRoutes,
  },
  {
    path: '/payment',
    route: paymentRoute,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));

export default router;
