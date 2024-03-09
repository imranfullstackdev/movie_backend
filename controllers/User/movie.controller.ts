/**
 * User controller
 */
// genre
// rating,
// streaming

import output from '../../helpers/output/index.js';
import DataService from '../../services/DataServices.js';
import UserModel, { UserDocument } from '../../models/user.model.ts';
import movieModel from '../../models/movie.model.js';
import { Role } from '../../model-constants.js';
import { Request, Response } from 'express';
import { IReqCustom, UserHeader } from '../../types/headers.js';

export async function PostMovie(req: IReqCustom<UserHeader>, res: Response) {
  const Id = req.headers.payload.userId;
  try {
    const userData = await DataService.findOne<UserDocument>(UserModel, {
      _id: Id
    });

    const data = req.body;
    if (userData && userData.role == Role.Admin) {
      const userData = await DataService.insertOne(movieModel, data);
      console.log(userData, 'userData');
      output.makeSuccessResponse(res, 7, 200, userData);
    } else {
      output.makeErrorResponse(res, 6, 400);
    }
  } catch (e) {
    console.log(e);
    return output.makeErrorResponse(res, 3, 500);
  }
}

// for get all movies
export async function allMovies(req: Request, res: Response) {
  try {
    const userData = await DataService.getData(movieModel);
    console.log(userData, 'userData');
    if (userData.length > 0) {
      output.makeSuccessResponse(res, 9, 200, userData);
    }
  } catch (error) {
    return output.makeErrorResponse(res, 3, 500);
  }
}

// to delete a movie
export async function DeleteMovie(req: IReqCustom<UserHeader>, res: Response) {
  const Id = req.headers.payload && req.headers.payload.userId;
  const movieId = req.query.id;
  console.log(movieId, 'movieId');

  try {
    const userData = await DataService.findOne(UserModel, {
      _id: Id
    });

    const data = req.body;
    if (userData && userData.role === Role.Admin) {
      const userData = await DataService.deleteOne(movieModel, { _id: movieId });
      output.makeSuccessResponse(res, 8, 200, userData);
    } else {
      output.makeErrorResponse(res, 6, 400);
    }
  } catch (e) {
    console.log(e);
    return output.makeErrorResponse(res, 3, 500);
  }
}

// incomplete
// to update a movie
export async function updateMovie(req, res) {
  const Id = req.headers.payload.userId;
  const movieId = req.query.id;
  console.log(movieId, 'movieId');

  try {
    const userData = await DataService.findOne(UserModel, {
      _id: Id
    });

    const data = req.body;
    if (userData && userData.role === Role.Admin) {
      const userData = await DataService.updateData(movieModel, { _id: movieId }, data);
      output.makeSuccessResponse(res, 7, 200, userData);
    } else {
      output.makeErrorResponse(res, 6, 400);
    }
  } catch (e) {
    console.log(e);
    return output.makeErrorResponse(res, 3, 500);
  }
}

// to search  movies
export async function searchMovie(req: Request, res: Response) {
  const params = req.query.q;
  console.log(params);
  try {
    const userData = await DataService.getData(movieModel, {
      $or: [{ genre: params }, { title: params }]
    });
    console.log(userData, 'userData');
    if (userData.length > 0) {
      output.makeSuccessResponse(res, 9, 200, userData);
    }
  } catch (error) {
    console.log(error, 'error');
    return output.makeErrorResponse(res, 3, 500);
  }
}
