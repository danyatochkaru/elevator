const clientsController = require("../controllers/clients.controller")

module.exports = router => {
  router.get('/clients/all', (req, res) => clientsController.getAll(req, res))
  router.get('/clients', (req, res) => clientsController.getById(req, res))
}