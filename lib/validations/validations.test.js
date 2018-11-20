/* eslint-disable no-unused-expressions */
/* eslint-env mocha */

const { expect } = require('chai')

const { string } = require('.')

const be = expected => value =>
  expect(value).to.be[expected]

const test = method => expecting => onCases =>
  onCases.map(method).forEach(expecting)

describe('Validations', () => {
  describe('#string', () => {
    const testString = test(string)

    describe('should return true', () => {
      const shouldBeTrue = testString(be(true))

      it('if the given value is a string', () => {
        shouldBeTrue(['', '123', 'test'])
      })

      it('if no value is given or it is null', () => {
        shouldBeTrue([null, undefined])
      })
    })

    describe('should return true', () => {
      it('if the given value is not a string', () => {
        testString(be(false))([123, [], {}, () => {}])
      })
    })
  })
})
