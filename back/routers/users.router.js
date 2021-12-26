const usersController = require("../controllers/users.controller")

module.exports = router => {
  router.get('/users/all', (req, res) => usersController.getAll(req, res))
  router.get('/users', (req, res) => usersController.getById(req, res))
  router.post('/users', (req, res) => usersController.insertNewUser(req, res))
  router.put('/users', (req, res) => usersController.updateUserInfo(req, res))
  router.delete('/users', (req, res) => usersController.removeUserInfo(req, res))
}