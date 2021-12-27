class AuthController {
  async login(req, res) {
    try {
      if (!!req.cookies.token) throw new Error("Уже авторизирован")
      let payload = {
        email: req.body.email,
        password: req.body.password
      }
      await authService.getAuthInfo(payload, (err, result) => {
        if (!!err) throw err
        res.cookie('token', result.token)
        res.send({ user_id: result.user_id })
      })
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }
  async registr(req, res) {
    try {
      if (!!req.cookies.token) throw new Error("Уже авторизирован")
      let payload = {
        email: req.body.email,
        password: req.body.password
      }
      await authService.insertNewUser(payload, (err, result) => {
        if (!!err) throw err
        res.cookie('token', result.token)
        res.send({ user_id: result.user_id })
      })
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }
  async getUserInfo(req, res) {
    try {
      let payload = {
        token: req.cookies.token
      }
      await authService.getUserInfo(payload, (err, result) => {
        if (!!err) throw err
        res.send(result)
      })
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }
}

module.exports = new AuthController()