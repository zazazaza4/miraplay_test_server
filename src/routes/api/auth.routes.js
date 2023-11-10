const router = require('express').Router();
const { body } = require('express-validator');

const authController = require('../../controllers/auth.controller');

router.post(
  '/login',
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 32 }),
  authController.login
);

router.post(
  '/register',
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 32 }),
  authController.register
);

module.exports = router;
