/* eslint-disable no-unused-expressions */
/* eslint-env mocha */

const { be, test } = require('../../utils/specs')

const array = require('.')

describe('Validations', () => {
  describe('#array', () => {
    const testArray = test(array)

    describe('should return true', () => {
      const shouldBeTrue = testArray(be(true))

      it('if the given value is an array', () => {
        /* eslint-disable-next-line */
        shouldBeTrue([[], new Array(), [1, 2, 3]])
      })

      it('if no value is given or it is null', () => {
        shouldBeTrue([null, undefined])
      })
    })

    describe('should return false', () => {
      it('if the given value is not an array', () => {
        testArray(be(false))([123, {}, () => {}, true, false])
      })
    })
  })
})
