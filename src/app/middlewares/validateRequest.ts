import { AnyZodObject } from 'zod';
import { NextFunction, Request, Response } from 'express';
import { catchAsyncError } from '../utils/catchAsyncError';

const validateRequest = (schema: AnyZodObject) => {
  return catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
      await schema.parseAsync({
        body: req.body,
      });
      next();
    },
  );
};

export default validateRequest;
