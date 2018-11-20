const boolean = value =>
  value === null
    || value === undefined
    || typeof value === 'boolean'

module.exports = boolean
