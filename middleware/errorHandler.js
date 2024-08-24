const { statusCodes } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const status = res.statusCode === 200 ? 500 : res.statusCode; // Default to 500 if no status code is set
  res.status(status);
  switch (status) {
    case statusCodes.NOT_FOUND:
      res.json({
        title: "Not FOUND !",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case statusCodes.UNAUTHORIZED:
      res.json({
        title: "User Unauthorized !",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case statusCodes.FORBIDEN:
      res.json({
        title: "User FORBIDEN !",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case statusCodes.SERVER_ERROR:
      res.json({
        title: "SERVER_ERROR !",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case statusCodes.VALIDATION_ERROR:
      res.json({
        title: "VALIDATION_ERROR !",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    default:
      res.json({
        title: "Unknown Error",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
  }
};

module.exports = errorHandler;
