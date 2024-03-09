/**
 * User controller
 */
// genre
// rating,
// streaming

import output from '../../helpers/output/index.js';
import DataService from '../../services/DataServices.js';
import UserModel from '../../models/user.model.js';
import { signAccessToken } from '../../middlewares/Authentication/auth.js';
import { compare, hash } from '../../helpers/bcrypt/index.js';

export async function signUp(req, res) {
  try {
    const data = req.body;

    data.email = data.email.toLowerCase();
    data.password = await hash(data.password);

    const emailExist = await DataService.findOne(UserModel, {
      email: data.email
    });
    if (emailExist) return output.makeErrorResponse(res, 1, 400);

    const userData = await DataService.insertOne(UserModel, data);
    const outputData = makeSignUpResponse(userData);
    return output.makeSuccessResponse(res, 2, 200, outputData);
  } catch (e) {
    console.log(e);
    return output.makeErrorResponse(res, 3, 500);
  }
}

export async function login(req, res) {
  try {
    const data = req.body;

    data.email = data.email.toLowerCase();

    const userData = await DataService.findOne(UserModel, {
      email: data.email
    });

    // Compare password using bcrypt
    if (!userData) return output.makeErrorResponse(res, 4, 400);

    // Compare password using bcrypt
    const comparedPassword = await compare(data.password, userData.password);
    if (!comparedPassword) return output.makeErrorResponse(res, 5, 400);

    const outputData = makeLoginResponse(userData);
    return output.makeSuccessResponse(res, 2, 200, outputData);
  } catch (e) {
    console.log(e);
    return output.makeErrorResponse(res, 3, 500);
  }
}

function makeSignUpResponse(userData) {
  const accessToken = signAccessToken(userData);
  return {
    accessToken,
    userData
  };
}

function makeLoginResponse(userData) {
  const accessToken = signAccessToken(userData);
  return {
    accessToken,
    userData
  };
}
