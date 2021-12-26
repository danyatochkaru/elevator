const { Router } = require('express')
const router = Router()

require('./routers/oreders.router')(router)
require('./routers/cities.router')(router)
require('./routers/clients.router')(router)
require('./routers/incoming.router')(router)
require('./routers/moving.router')(router)
require('./routers/products.router')(router)
require('./routers/storages.router')(router)
require('./routers/users.router')(router)

module.exports = router