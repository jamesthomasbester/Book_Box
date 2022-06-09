const router = require('express').Router();
const { get } = require('express/lib/response');
const { Op } = require("sequelize");
const { Book } = require('../models');

router.get('/', async (req, res) => {
    try{
        const bookData = await Book.findAll({ where: { average_rating : {[Op.gt]: 4.8}}})
        const newArrivals = await Book.findAll({ where: { published_year: {[Op.gt]: 2017 }}})
        const books = bookData.map(item => item.get({ plain: true}))
        const arrivals = newArrivals.map(item => item.get({ plain: true}))
        res.render('homepage', {books, arrivals});
    }catch{
        res.render('homepage')
    }

    
})

router.get('/checkout', (req, res) => {
    res.render('checkout')
})

router.get('/:search', async (req, res) =>{
        const category = await Book.findAll({ 
            where: { 
                categories: req.params.search,
            }})
        const Category = category.map(item => item.get({ plain : true }))
        const title = await Book.findAll({ 
            where: { 
                categories: req.params.search,
            }})
        const Tilte = title.map(item => item.get({ plain : true }))
        const author = await Book.findAll({ 
            where: { 
                categories: req.params.search,
            }})
        const Author = author.map(item => item.get({ plain : true }))
        res.render('search', {Category, Tilte, Author})
})

module.exports = router;