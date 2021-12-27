const checkAuth = require("../controllers/checkAuth")
const ordersController = require("../controllers/orders.controller")

module.exports = router => {
  router.get('/orders/all', checkAuth, (req, res) => ordersController.getAllByClientId(req, res))
  router.get('/orders', checkAuth, (req, res) => ordersController.getById(req, res))
}