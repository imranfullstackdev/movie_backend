import errorMessages from './message.js';
const output = {};

// 400 = Bad request
// 401 = Auth error
// 403 = not authorized to perform this action

output.makeErrorResponse = function (res, errorCode, statusCode = 400, err) {
  const outputData = output.makeErrorResponseText(res, errorCode, err);
  res.status(statusCode).send(outputData);
};

output.makeValidationErrorResponse = function (
  res,
  errorCode,
  statusCode = 400,
  err
) {
  const outputData = output.makeValidationResponseText(res, errorCode, err);

  res.status(statusCode).send(outputData);
};

output.makeSuccessResponse = async function (
  res,
  messageCode,
  statusCode = 200,
  data
) {
  
  const makeSuccessResponse = {
    status: statusCode,
    ...(messageCode ? { message: errorMessages[messageCode] } : {}),
    output: data,
    time: new Date()
  };

  res.send(makeSuccessResponse);
};

output.makeErrorResponseText = function (res, errorCode) {
  return {
    error: {
      errorCode: errorCode,
      message: errorMessages[errorCode]
    },
    time: new Date()
  };
};

output.makeValidationResponseText = function (res, errorCode) {
  let makeError = {};
  if (errorCode.error) {
    makeError = {
      error: errorCode.error,
      time: new Date()
    };
  } else if (errorCode.message) {
    makeError = {
      error: {
        errorCode: 1000,
        message: errorCode.message
      },
      time: new Date()
    };
  } else {
    makeError = {
      error: {
        errorCode: errorCode,
        message: errorMessages.error[errorCode]
      },
      time: new Date()
    };
  }
  return makeError;
};

export default output;
