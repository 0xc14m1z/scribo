/* eslint-disable no-unused-expressions */
/* eslint-env mocha */

const { be, test } = require('../../utils/specs')

const number = require('.')

describe('Validations', () => {
  describe('#number', () => {
    const testNumber = test(number)

    describe('should return true', () => {
      const shouldBeTrue = testNumber(be(true))

      it('if the given value is a number', () => {
        const { MAX_VALUE, MIN_VALUE } = Number
        shouldBeTrue([0, -42, 42, 123.456, -2e12, MAX_VALUE, MIN_VALUE])
      })

      it('if no value is given or it is null', () => {
        shouldBeTrue([null, undefined])
      })
    })

    describe('should return false', () => {
      it('if the given value is not a number', () => {
        testNumber(be(false))([true, false, [], {}, () => {}, '123'])
      })
    })
  })
})
