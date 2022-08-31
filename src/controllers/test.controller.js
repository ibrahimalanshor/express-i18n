module.exports = (req, res, next) => {
  return res.json(req.polyglot.t('greet.hello', { name: 'ibra' }))
}