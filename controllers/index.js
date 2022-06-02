const router = require('express').Router();
<<<<<<< HEAD

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);

=======
const homeRoutes = require('./homeRoutes');
//const dashboardRoutes = require('./dashboard-routes.js');

router.use('/', homeRoutes);
//router.use('/dashboard', dashboardRoutes);
>>>>>>> a6ba7fec677db398184607c9df8107a91a8c0861

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;