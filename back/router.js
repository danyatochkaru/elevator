const { Router } = require('express')
const router = Router()

router.get('/api', (req, res) => res.json("ok"))

module.exports = router