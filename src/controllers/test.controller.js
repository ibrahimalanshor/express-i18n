module.exports = (req, res, next) => {
  return res.json(req.locale)
}