/**
 * User controller
 */
// genre
// rating,
// streaming

import output from '../../helpers/output/index.js';
import DataService from '../../services/DataServices.js';
import UserModel from '../../models/user.model.js';
import movieModel from '../../models/movie.model.js';

export async function PostMovie(req, res) {
  const Id = req.headers.payload.userId;
  try {
    const userData = await DataService.findOne(UserModel, {
      _id: Id
    });

    const data = req.body;
    if (userData.role == 'Admin') {
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
export async function allMovies(req, res) {
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
export async function DeleteMovie(req, res) {
  const Id = req.headers.payload.userId;
  const movieId = req.query.id;
  console.log(movieId, 'movieId');

  try {
    const userData = await DataService.findOne(UserModel, {
      _id: Id
    });

    const data = req.body;
    if (userData.role == 'Admin') {
      const userData = await DataService.deleteOne(movieModel,{ _id: movieId });
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
    if (userData.role == 'Admin') {
      const userData = await DataService.updateData(movieModel, data, { _id: movieId });
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
export async function searchMovie(req, res) {
  const params = req.query.q;
  try {
    const userData = await DataService.getData(movieModel, { params });
    console.log(userData, 'userData');
    if (userData.length > 0) {
      output.makeSuccessResponse(res, 9, 200, userData);
    }
  } catch (error) {
    console.log(error, 'error');
    return output.makeErrorResponse(res, 3, 500);
  }
}
