/* eslint-disable no-unused-expressions */
/* eslint-env mocha */

const { expect } = require('chai')

const Validations = require('.')

const be = expected => value =>
  expect(value).to.be[expected]

const test = method => expecting => onCases =>
  onCases.map(method).forEach(expecting)

describe('Validations', () => {
  describe('#string', () => {
    const testString = test(Validations.string)

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

  describe('#boolean', () => {
    const testBoolean = test(Validations.boolean)

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

  describe('#number', () => {
    const testNumber = test(Validations.number)

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

  describe('#optional', () => {
    const optionalString = Validations.optional(Validations.string)
    const testOptional = test(optionalString)

    describe('should return true', () => {
      const shouldBeTrue = testOptional(be(true))

      it('if no value is given or it is null', () => {
        shouldBeTrue([null, undefined])
      })

      it('if the given value pass the validation', () => {
        shouldBeTrue(['', '123', 'test'])
      })
    })

    describe('should return false', () => {
      it('if the given value doesn\'t pass the validation', () => {
        testOptional(be(false))([true, false, [], {}, () => {}, 123])
      })
    })
  })
})
