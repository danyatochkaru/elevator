class ClientsController {
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
        count: Number(req.query?.count)
      }
      await clientsService.getAllClients(payload, this.#sendResponse(res))
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }
  async getById(req, res) {
    try {
      let payload = {
        client_id: Number(req.query?.client_id)
      }
      await clientsService.getClientById(payload, this.#sendResponse(res))
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }
}

module.exports = new ClientsController()