const router = require('express').Router();
const { Op } = require("sequelize");
const { Book } = require('../models');

router.get('/', async (req, res) => {
    const bookData = await Book.findAll({ where: { average_rating : {[Op.gt]: 4.8}}})
    const newArrivals = await Book.findAll({ where: { published_year: {[Op.gt]: 2017 }}})
    const books = bookData.map(item => item.get({ plain: true}))
    const arrivals = newArrivals.map(item => item.get({ plain: true}))
    console.log(arrivals)
    res.render('homepage', {books, arrivals});
})

module.exports = router;