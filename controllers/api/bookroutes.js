const router = require('express').Router();
const {Book, User, Favourite} = require('../../models');

router.get('/', (req, res) =>{

})

router.get('/:id', (req, res) =>{
    Book.findOne({ 
        where: {
            id: req.params.id
    }}).then(result => {
        if(result){
            res.status(200).json(result)
        }else{
            res.status(400).json('bad response')
        }
    })
})

router.post('/', (req, res) => {

})

router.post('/favourite', (req, res) => {
    console.log(req.body)
    //Favourite.create({})
})

router.get('/title/:title', (req, res) => {
    Book.findAll({ 
        where: {
            title: req.params.title
    }}).then(result => {
        if(result){
            res.status(200).json(result)
        }else{
            res.status(400).json('bad response')
        }
    })
})

router.get('/category/:category', (req, res) => {
    Book.findAll({ 
        where: {
            categories: req.params.category
    }}).then(result => {
        if(result){
            res.status(200).json(result)
        }else{
            res.status(400).json('bad response')
        }
    })
})

module.exports = router;