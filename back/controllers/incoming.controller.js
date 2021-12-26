class IncomingController {
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
      await incomingsService.getAllIncomings(payload, this.#sendResponse(res))
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }
  async getById(req, res) {
    try {
      let payload = {
        incoming_id: Number(req.query?.incoming_id)
      }
      await incomingsService.getIncomingById(payload, this.#sendResponse(res))
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }
}

module.exports = new IncomingController()