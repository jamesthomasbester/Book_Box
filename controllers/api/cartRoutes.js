const router = require('express').Router();
const { Cart,  Book } = require('../../models');


router.get('/', async (req, res) => {

  await Cart.findAll({
    attributes: ["id", "name", "user_id"],
    include: [{
      model: Book,
      attributes: ["id", "title", "category", "description", "image_url", "user_id"]
    }]
  })
  .then((categories) => {
    res.json(categories);
  })

 
});

router.get('/:id', async (req, res) => {
  await Category.findByPk(req.params.id, {
    attributes: ["id", "name", "user_id"],
		include: [
			{
				model: Book,
        attributes:  ["id", "title", "category", "description", "image_url", "user_id"]
			}
		],
	})
  .then((cart) => {
    res.json(cart);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.post('/', async (req, res) => {
  await Cart.create(req.body)
		.then((newCart) => res.status(200).json(newCart))
		.catch((err) => {
			console.log(err);
			res.status(400).json(err);
		});
});

router.put('/:id', async (req, res) => {
  await Cart.update(req.body, {
		where: {
			id: req.params.id,
		},
	})
  .then(cart => Cart.findByPk(req.params.id))
  .then((updatedCart) => res.status(200).json(updatedCart))
  .catch((err) => {res.json(err);});
});

router.delete('/:id', async (req, res) => {
	await Cart.destroy({
		where: {
			id: req.params.id,
		},
	})
	.then((rmvdCart) => {
		res.json(`The cart was removed from the database`);
	})
	.catch((err) => {
		res.json(err);
	});
});

module.exports = router;