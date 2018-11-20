/* eslint-disable no-unused-expressions */
/* eslint-env mocha */

const { be, test } = require('../../utils/specs')

const optional = require('.')

describe('Validations', () => {
  describe('#optional', () => {
    const fakeValidation = value => value === 42

    const optionalMagicNumber = optional(fakeValidation)
    const testOptional = test(optionalMagicNumber)

    describe('should return true', () => {
      const shouldBeTrue = testOptional(be(true))

      it('if no value is given or it is null', () => {
        shouldBeTrue([null, undefined])
      })

      it('if the given value pass the validation', () => {
        shouldBeTrue([42])
      })
    })

    describe('should return false', () => {
      it('if the given value doesn\'t pass the validation', () => {
        testOptional(be(false))([true, false, [], {}, () => {}, 123])
      })
    })
  })
})
