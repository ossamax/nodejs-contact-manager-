const { statusCodes } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const status = res.statusCode || 500;

  switch (status) {
    case statusCodes.NOT_FOUND:
      res.json({
        title: "Validation failaed !",
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
    default:
      console.log("No error all good !");
      break;
  }
};

module.exports = errorHandler;
