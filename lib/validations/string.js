const string = value =>
  value === null
    || value === undefined
    || typeof value === 'string'

module.exports = string
