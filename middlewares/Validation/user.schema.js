import Joi from 'joi';
import output from '../../helpers/output/index.js';

export function signUp(req, res, next) {
  const schema = Joi.object({
    email: Joi.string().min(3).required().email(),
    password: Joi.string().required(),
    firstName: Joi.string().required(),
    role: Joi.string().required()
  });


  const validatedRes = schema.validate(req.body);
  if (validatedRes.error) {
    return output.makeValidationErrorResponse(res, validatedRes.error, 400);
  }

  next();
}
export function login(req, res, next) {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required()
  });
  

  const validatedRes = schema.validate(req.body);
  if (validatedRes.error) {
    return output.makeValidationErrorResponse(res, validatedRes.error, 400);
  }

  next();
}
export function movieValidation(req, res, next) {
  console.log(req.body)
  const schema = Joi.object({
    title: Joi.string().required(),
    genre: Joi.string().required(),
    rating: Joi.number().required(),
  });

  const validatedRes = schema.validate(req.body);
  if (validatedRes.error) {
    return output.makeValidationErrorResponse(res, validatedRes.error, 400);
  }

  next();
}

export function movieUpdateValidation(req, res, next) {
  console.log(req.body)
  const schema = Joi.object({
    title: Joi.string(),
    genre: Joi.string(),
    rating: Joi.number(),
  });

  const validatedRes = schema.validate(req.body);
  if (validatedRes.error) {
    return output.makeValidationErrorResponse(res, validatedRes.error, 400);
  }

  next();
}

