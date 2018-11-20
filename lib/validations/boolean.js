const optional = require('./optional')

const boolean = value =>
  typeof value === 'boolean'

module.exports = optional(boolean)
