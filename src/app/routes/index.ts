import express from 'express';
import { ProductRoutes } from '../modules/product/product.routes';

const router = express.Router();

const moduleRoute = [
  {
    path: '/product',
    route: ProductRoutes,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));

export default router;
