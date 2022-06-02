const router = require('express').Router();
const apiCall = require('../src/apiCall');

router.get('/', (req, res) => {
    apiCall('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita').then(res => console.log(res))
})

router.get('/login', (req, res) =>{
    res.render('login');
});

router.get('/checkout', (req, res) => {
    res.render('checkout')
})

module.exports = router;