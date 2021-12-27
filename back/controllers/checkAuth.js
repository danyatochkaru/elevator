module.exports = (req, res, next) => {
  if (!req.cookies.token) res.sendStatus(401)
  else next()
}