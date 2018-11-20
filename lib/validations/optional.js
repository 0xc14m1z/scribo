const optional = validation => value =>
  value === null
    || value === undefined
    || validation(value)

module.exports = optional
