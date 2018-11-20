const optional = require('./optional')

const string = value =>
  typeof value === 'string'

module.exports = optional(string)
