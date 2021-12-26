const incomingController = require("../controllers/incoming.controller")

module.exports = router => {
  router.get('/incomings/all', (req, res) => incomingController.getAll(req, res))
  router.get('/incomings', (req, res) => incomingController.getById(req, res))
}