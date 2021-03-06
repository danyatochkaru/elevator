class OrderController {
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
  async getAllByClientId(req, res) {
    try {
      let payload = {
        client_id: Number(req.query?.client_id),
        from: Number(req.query?.from),
        count: Number(req.query?.count),
        order_by: req.query?.order_by
      }
      await ordersService.getAllOrdersByClientId(payload, this.#sendResponse(res))
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }
  async getById(req, res) {
    try {
      let payload = {
        order_id: Number(req.query?.order_id)
      }
      await ordersService.getOrderById(payload, this.#sendResponse(res))
    } catch (err) {
      console.error(err)
      res.status(500).json(err)
    }
  }
}

module.exports = new OrderController()