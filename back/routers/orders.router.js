const ordersController = require("../controllers/orders.controller")

module.exports = router => {
  router.get('/orders/all', (req, res) => ordersController.getAllByClientId(req, res))
  router.get('/orders', (req, res) => ordersController.getById(req, res))
}