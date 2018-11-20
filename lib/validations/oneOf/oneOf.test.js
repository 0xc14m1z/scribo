/* eslint-disable no-unused-expressions */
/* eslint-env mocha */

const { be, test } = require('../../utils/specs')

const oneOf = require('.')

describe('Validations', () => {
  describe('#oneOf', () => {
    const testOneOf = test(oneOf([1, 2, 3]))

    describe('should return true', () => {
      const shouldBeTrue = testOneOf(be(true))

      it('if the given value is in the configured array', () => {
        shouldBeTrue([1, 2, 3])
      })

      it('if no value is given or it is null', () => {
        shouldBeTrue([null, undefined])
      })
    })

    describe('should return false', () => {
      it('if the given value is not in the configured array', () => {
        testOneOf(be(false))([123, {}, () => {}, true, false])
      })
    })
  })
})
