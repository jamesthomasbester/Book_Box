const router = require('express').Router();
const { Favourite, Book } = require('../../models');

router.get('/', async (req, res) => {
    await Favourite.findAll({
    attribute: ["id", "name", "description", "date_created", "needed_funding", "user_id"],
    include: [{
        model: Book,
        attributes: ["id", "title", "category", "description", "image_url", "user_id"]
    }]
    })
    .then((favourites) => {
        res.json(favourites);
    })
});
router.post('/', async (req, res) => {
    
    await Favourite.create(req.body)
          .then((newFavourite) => res.status(200).json(newFavourite))
          .catch((err) => {
              console.log(err);
              res.status(400).json(err);
          });
  });
  
  router.put('/:id', async (req, res) => {
    
    await Favourite.update(req.body, {
          where: {
              id: req.params.id,
          },
      })
    .then(fav => Favourite.findByPk(req.params.id))
    .then((updatedFavourite) => res.status(200).json(updatedFavourite))
    .catch((err) => {res.json(err);});
  });
  
  router.delete('/:id', async (req, res) => {
    
      await Favourite.destroy({
          where: {
              id: req.params.id,
          },
      })
      .then((rmvdFavourite) => {
          res.json(`The favourite was removed from the database`);
      })
      .catch((err) => {
          res.json(err);
      });
  });
  
  module.exports = router;