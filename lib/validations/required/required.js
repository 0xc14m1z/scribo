const required = validation => value =>
  value !== null
    && value !== undefined
    && validation(value)

module.exports = required
