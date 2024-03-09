import Jwt from 'jsonwebtoken';
import constants from '../../config/constants.js';
// import encrypt from '../../helpers/encrypt/index.js';
const privateKey = constants.JWT_SECRET;
export function signAccessToken(userDetails) {
  let data = {
    // userType: userDetails.userType,
    userId: userDetails._id.toString()
  };
  // data = encrypt.encryptObject(data);
  const accessToken = Jwt.sign(data, privateKey, {});

  return accessToken;
}

export async function verifyAccessToken(accessToken) {
  const payload = Jwt.verify(accessToken, privateKey);
  // const data = encrypt.decryptObject(payload);
  return payload;
}

export async function verifyRole(req, res, next) {
  const accessToken=req.headers.token
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
