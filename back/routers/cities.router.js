const citiesController = require("../controllers/cities.controller")

module.exports = router => {
  router.get('/cities/all', (req, res) => citiesController.getAll(req, res))
  router.get('/cities', (req, res) => citiesController.getById(req, res))
}