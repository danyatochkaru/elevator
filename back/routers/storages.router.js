const storagesController = require("../controllers/storages.controller")

module.exports = router => {
  router.get('/storages/all', (req, res) => storagesController.getAll(req, res))
  router.get('/storages', (req, res) => storagesController.getById(req, res))
}