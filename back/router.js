const { Router } = require('express')
const router = Router()

require('./routers/oreders.router')(router)

module.exports = router