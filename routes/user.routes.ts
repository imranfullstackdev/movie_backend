/**
 * User Routes
 */

import { Router } from 'express';

import * as UserController from '../controllers/User/user.controller.js';
import * as movieController from '../controllers/User/movie.controller.js';
import * as Validation from '../middlewares/Validation/user.schema.js';
import { verifyRole } from '../middlewares/Authentication/auth.ts';

const routes = Router();

routes.post('/signup', Validation.signUp, UserController.signUp);
routes.post('/login', Validation.login, UserController.login);
// @ts-ignore
routes.post('/movies', verifyRole, Validation.movieValidation, movieController.PostMovie);
routes.get('/movies', movieController.allMovies);
// @ts-ignore
routes.delete('/movies', verifyRole, movieController.DeleteMovie);
// pending
routes.get('/search', movieController.searchMovie);
routes.put('/movies', verifyRole, Validation.movieUpdateValidation, movieController.updateMovie);

export default routes;
