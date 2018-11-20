const optional = require('../optional')

const array = value =>
  Array.isArray(value)

module.exports = optional(array)
