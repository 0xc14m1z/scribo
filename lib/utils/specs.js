/* eslint-disable import/no-extraneous-dependencies */

const { expect } = require('chai')

const be = expected => value =>
  expect(value).to.be[expected]

const test = method => expecting => onCases =>
  onCases.map(method).forEach(expecting)

module.exports = {
  be,
  test
}
