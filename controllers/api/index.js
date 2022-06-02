const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bookRoutes = require('./book-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/books', bookRoutes);
router.use('/comment', commentRoutes);

module.exports = router;