const router = require('express').Router();
const userRoutes = require('./user-routes');
// const bookRoutes = require('./book-routes');
const test = require('./test');
router.use('/users', userRoutes);
// router.use('/books', bookRoutes);
router.use('/test', test)

module.exports = router;
