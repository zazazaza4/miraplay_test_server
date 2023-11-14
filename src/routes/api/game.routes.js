const router = require('express').Router();

const gameController = require('../../controllers/game.controller');
const auth = require('../../middlewares/auth.middleware');

router.get('/', auth, gameController.getList);

module.exports = router;
