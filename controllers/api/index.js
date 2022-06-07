const router = require('express').Router();
const userRoutes = require('./userRoutes');
const cartRoutes = require('./cartRoutes');
const bookRoutes = require('./bookRoutes');
const favouriteRoutes = require('./favouriteRoutes');

router.use('/users', userRoutes);
router.use('/books', bookRoutes);
router.use('/carts', cartRoutes);
router.use('/favourites', favouriteRoutes);

module.exports = router;