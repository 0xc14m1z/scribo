const optional = require('../optional')
const array = require('../array')

const oneOf = values =>
  optional(
    value =>
      array(values) && values.includes(value)
  )

module.exports = oneOf
