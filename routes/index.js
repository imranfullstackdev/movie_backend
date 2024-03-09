/**
 * API Routes
 */

import { Router } from 'express';
import HTTPStatus from 'http-status';

import UserRoutes from './user.routes.js';

import APIError from '../services/error.js';

// Middlewares
import logErrorService from '../services/log.js';

const routes = new Router();

routes.use('/', UserRoutes);

routes.all('*', (req, res, next) =>
  next(new APIError('Not Found!', HTTPStatus.NOT_FOUND, true))
);

routes.use(logErrorService);

export default routes;
