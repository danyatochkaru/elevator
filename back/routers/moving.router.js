const movingController = require("../controllers/moving.controller")

module.exports = router => {
  router.get('/movings/all', (req, res) => movingController.getAll(req, res))
  router.get('/movings', (req, res) => movingController.getById(req, res))
}