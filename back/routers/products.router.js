const productsController = require("../controllers/products.controller")

module.exports = router => {
  router.get('/products/all', (req, res) => productsController.getAll(req, res))
  router.get('/products', (req, res) => productsController.getById(req, res))
}