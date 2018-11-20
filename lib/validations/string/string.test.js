/* eslint-disable no-unused-expressions */
/* eslint-env mocha */

const { be, test } = require('../../utils/specs')

const string = require('.')

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

    describe('should return false', () => {
      it('if the given value is not a string', () => {
        testString(be(false))([123, [], {}, () => {}, true, false])
      })
    })
  })
})
