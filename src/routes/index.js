const router = require('express').Router();
const apiRoutes = require('./api');

const keys = require('../configs/keys');
const { apiURL } = keys.app;

const api = `${apiURL}`;

router.use(api, apiRoutes);

module.exports = router;
