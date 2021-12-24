const ordersController = require("../controllers/orders.controller")

module.exports = router => {
  router.get('/orders', (req, res) => ordersController.getOrders(req, res))
}