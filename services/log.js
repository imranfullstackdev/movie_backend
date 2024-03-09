/**
 * Error handler for api routes
 */
// eslint-disable-next-line no-unused-vars
export default function logErrorService(error, request, response, next) {
  response.header('Content-Type', 'application/json');
  const status = error.status || 500;
  response.status(status).send(error.message);

  return next();
}
