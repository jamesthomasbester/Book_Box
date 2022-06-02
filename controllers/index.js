const router = require('express').Router();
const home = require('./homepage');

router.use('/', home);

module.exports = router;