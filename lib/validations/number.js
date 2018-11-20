const number = value =>
  value === null
    || value === undefined
    || (
      !Number.isNaN(value)
        && Number.isFinite(value)
        && typeof value === 'number'
    )

module.exports = number
