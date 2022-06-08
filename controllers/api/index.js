const router = require('express').Router();
const userRoutes = require('./user-routes');
//const bookRoutes = require('./book-routes');
const bookRoutes = require('./bookroutes.js');

router.use('/users', userRoutes);
router.use('/books', bookRoutes);


module.exports = router;
