const optional = require('./optional')

const number = value =>
  !Number.isNaN(value)
    && Number.isFinite(value)
    && typeof value === 'number'

module.exports = optional(number)
