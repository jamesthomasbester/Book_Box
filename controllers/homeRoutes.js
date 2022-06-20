const router = require('express').Router();
const { get } = require('express/lib/response');
const { Op } = require("sequelize");
const { Book, Favourite, Cart } = require('../models');

router.get('/', async (req, res) => {
    try{
        const bookData = await Book.findAll({ where: { average_rating : {[Op.gt]: 4.8}}})
        const newArrivals = await Book.findAll({ where: { published_year: {[Op.gt]: 2010 }}})
  //      const newFav = await Favourite.findAll({ where: { user_id: req.session.user_id }})
        const books = bookData.map(item => item.get({ plain: true}))
        const arrivals = newArrivals.map(item => item.get({ plain: true}))
   //     const favs = newFav.map(item => item.get({ plain: true }))
        console.log(books);
        res.render('homepage', {
            loggedIn: req.session.loggedIn,
  //          favs,
            books, 
            arrivals,
   //         user: req.session.username
        });
    }catch(err){
        console.log(err)
        res.render('homepage')
    }
})

router.get('/checkout', (req, res) => {
    res.render('checkout')
})

router.get('/cart', async (req, res) => {
    const cartData = await Cart.findAll({where: { user_id: req.session.user_id}})
    const cart = cartData.map(item => item.get({plain:true}).id)
    const bookData = await Book.findAll({where: { id: cart}})
    const books = bookData.map(item => item.get({plain: true}))
    console.log(cart)
    console.log(books)
    res.render('cart', {books})
})

router.get('/:search', async (req, res) =>{
        const categories = await Book.findAll({ 
            where: { 
                categories: req.params.search,
            }})
        const Category = categories.map(item => item.get({ plain : true }))
        const title = await Book.findAll({ 
            where: { 
                title: req.params.search,
            }})
        const Title = title.map(item => item.get({ plain : true }))
        const author = await Book.findAll({ 
            where: { 
                author: req.params.search,
            }})
        const Author = author.map(item => item.get({ plain : true }))
        res.render('search', {Category, Title, Author})
})


module.exports = router;