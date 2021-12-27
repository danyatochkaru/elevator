const clientsController = require("../controllers/clients.controller")

module.exports = router => {
  router.get('/clients/all', checkAuth, (req, res) => clientsController.getAll(req, res))
  router.get('/clients', checkAuth, (req, res) => clientsController.getById(req, res))
}