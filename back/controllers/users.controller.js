class UsersController {
  #sendResponse = (res) => {
    return (err, result) => {
      try {
        if (!!err) res.status(500).json(err)
        else res.send(result)
      } catch (err) {
        console.error(err)
        res.status(500).json(err)
      }
    }
  }
  async getAll(req, res) {
    try {
      let payload = {
        from: Number(req.query?.from),
        count: Number(req.query?.count),
        order_by: req.query?.order_by
      }
      await usersService.getAllUsers(payload, this.#sendResponse(res))
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }
  async getById(req, res) {
    try {
      let payload = {
        user_id: Number(req.query?.user_id)
      }
      await usersService.getUserById(payload, this.#sendResponse(res))
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }
  async insertNewUser(req, res) {
    try {
      if (!req.body?.email
        || !req.body?.first_name
        || !req.body?.second_name
        || !req.body?.password) throw new Error("Недостаточно данных")
      let payload = {
        email: req.body?.email,
        first_name: req.body?.first_name,
        second_name: req.body?.second_name,
        password: req.body?.password
      }
      await usersService.insertNewUser(payload, this.#sendResponse(res))
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }
  async updateUserInfo(req, res) {
    try {
      if (!req.body?.email
        || !req.body?.first_name
        || !req.body?.second_name
        || !req.body?.password
        || !req.body?.access_level
        || !req.body?.user_id) throw new Error("Недостаточно данных")
      let payload = {
        user_id: Number(req.query?.user_id),
        email: req.query?.email,
        password: req.query?.password,
        first_name: req.query?.first_name,
        second_name: req.query?.second_name,
        access_level: Number(req.query?.access_level)
      }
      await usersService.updateUserInfo(payload, this.#sendResponse(res))
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }
  async removeUserInfo(req, res) {
    try {
      if (!req.body?.user_id) throw new Error("Недостаточно данных")
      let payload = {
        user_id: Number(req.query?.user_id)
      }
      await usersService.removeUserInfo(payload, this.#sendResponse(res))
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }
}

module.exports = new UsersController()