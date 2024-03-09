/**
 * Error handler for api routes
 */

import { NextFunction, Request, Response } from 'express';
import { Error } from 'mongoose';

// eslint-disable-next-line no-unused-vars
export default function logErrorService(
  error: any,
  request: Request,
  response: Response,
  next: NextFunction
) {
  response.header('Content-Type', 'application/json');
  const status = error.status || 500;
  response.status(status).send(error.message);
  return next();
}
