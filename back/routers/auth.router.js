const authController = require("../controllers/auth.controller")
const checkAuth = require("../controllers/checkAuth")

module.exports = router => {
  router.get('/auth/me', checkAuth, (req, res) => authController.getUserInfo(req, res))
  router.post('/auth/registr', (req, res) => authController.registr(req, res))
  router.put('/auth/login', (req, res) => authController.login(req, res))
}