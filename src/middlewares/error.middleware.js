const ApiError = require('../utils/exceptions/app.error');

const error = (err, req, res, next) => {
  console.log(err);

  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: 'Сталося щось несподіване' });
};

module.exports = error;
