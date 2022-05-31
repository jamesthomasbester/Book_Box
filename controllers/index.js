<<<<<<< HEAD
const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

=======
const router = require('express').Router();
const home = require('./homepage');

router.use('/', home);

>>>>>>> 712b0f0ecf4ebcfcdf17f37223632ab1cc3b4ac6
module.exports = router;