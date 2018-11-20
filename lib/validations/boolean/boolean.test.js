/* eslint-disable no-unused-expressions */
/* eslint-env mocha */

const { be, test } = require('../../utils/specs')

const boolean = require('.')

describe('Validations', () => {
  describe('#boolean', () => {
    const testBoolean = test(boolean)

    describe('should return true', () => {
      const shouldBeTrue = testBoolean(be(true))

      it('if the given value is boolean', () => {
        shouldBeTrue([true, false])
      })

      it('if no value is given or it is null', () => {
        shouldBeTrue([null, undefined])
      })
    })

    describe('should return false', () => {
      it('if the given value is not a boolean', () => {
        testBoolean(be(false))([123, [], {}, () => {}, '123'])
      })
    })
  })
})
