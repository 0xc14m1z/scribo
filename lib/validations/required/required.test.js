/* eslint-disable no-unused-expressions */
/* eslint-env mocha */

const { be, test } = require('../../utils/specs')

const required = require('.')

describe('Validations', () => {
  describe('#required', () => {
    const fakeValidation = value => value === 42

    const requiredMagicNumber = required(fakeValidation)
    const testRequired = test(requiredMagicNumber)

    describe('should return true', () => {
      const shouldBeTrue = testRequired(be(true))

      it('if the value is given and pass the validation', () => {
        shouldBeTrue([42])
      })
    })

    describe('should return false', () => {
      const shouldBeFalse = testRequired(be(false))

      it('if no value is given or it is null', () => {
        shouldBeFalse([null, undefined])
      })

      it('if the given value doesn\'t pass the validation', () => {
        shouldBeFalse([true, false, [], {}, () => {}, 123])
      })
    })
  })
})
