import Jwt from 'jsonwebtoken';
import constants from '../../config/constants.js';
import { NextFunction, Request, Response } from 'express';
import { UserDocument } from '../../models/user.model.ts';
// import encrypt from '../../helpers/encrypt/index.js';
const privateKey = constants.JWT_SECRET as string;
export function signAccessToken(userDetails: UserDocument) {
  let data = {
    // userType: userDetails.userType,
    userId: userDetails._id.toString()
  };
  // data = encrypt.encryptObject(data);
  const accessToken = Jwt.sign(data, privateKey, {});

  return accessToken;
}

export async function verifyAccessToken(accessToken: string) {
  const payload = Jwt.verify(accessToken, privateKey);
  // const data = encrypt.decryptObject(payload);
  return payload;
}

export async function verifyRole(req: Request, res: Response, next: NextFunction) {
  const accessToken = req.headers.token;
  try {
    const payload = Jwt.verify(accessToken, privateKey);
    req.headers.payload = payload;
    if (payload) {
      next();
    }
  } catch (error) {
    console.log(error, 'asdasda');
    res.send('invalid token');
  }
}
