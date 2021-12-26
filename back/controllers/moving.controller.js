class MovingController {
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
      await movingsService.getAllMovings(payload, this.#sendResponse(res))
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }
  async getById(req, res) {
    try {
      let payload = {
        moving_id: Number(req.query?.moving_id)
      }
      await movingsService.getMovingById(payload, this.#sendResponse(res))
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }
}

module.exports = new MovingController()