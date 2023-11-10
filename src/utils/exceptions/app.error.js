const { UNAUTHORIZED } = require('../../constants/messages');

module.exports = class ApiError extends Error {
  status;
  errors;

  constructor(status, message, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static UnauthorizedError() {
    return new ApiError(401, 'Your session has expired. Please login again');
  }

  static BadRequest(message, errors = []) {
    return new ApiError(400, message, errors);
  }
};
