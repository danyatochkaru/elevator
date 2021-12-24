class OrdersController {
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
  getOrders(req, res) {
    try {
      if (!req.query?.id) {
        ordersService.getAllOrders(this.#sendResponse(res))
      }
    } catch (err) {
      
    }
    return "ok"
  }
}
module.exports = new OrdersController()