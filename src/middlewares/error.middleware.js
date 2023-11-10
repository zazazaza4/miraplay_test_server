const ApiError = require('../utils/exceptions/app.error');

const error = (err, req, res, next) => {
  console.log(err);

  if (err instanceof ApiError) {
    return res
      .status(err.status)
      .json({ message: err.message, errors: err.errors });
  }
  return res.status(500).json({ message: 'Something unexpected happened' });
};

module.exports = error;
