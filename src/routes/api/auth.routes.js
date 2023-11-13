const router = require('express').Router();
const { body } = require('express-validator');

const authController = require('../../controllers/auth.controller');

router.post(
  '/sign-in',
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 32 }),
  authController.signIn
);

router.post(
  '/sign-up',
  body('email').isEmail(),
  body('password').isLength({ min: 3, max: 32 }),
  authController.signUp
);

router.post('/logout', authController.logout);

router.get('/refresh', authController.refresh);

module.exports = router;
