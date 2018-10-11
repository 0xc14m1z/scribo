/* eslint-env mocha */

const { expect } = require('chai')

const Dialect = require('./Dialect')

describe('Dialect', () => {
  describe('#queryDefinitionType', () => {
    it('should throw an error if no definition is given', () => {
      const fn = () => Dialect.queryDefinitionType()
      expect(fn).to.throw(/invalid/i)
    })

    it('should throw an error if the given definition is null', () => {
      const fn = () => Dialect.queryDefinitionType(null)
      expect(fn).to.throw(/invalid/i)
    })

    it('should throw an error if the given definition is undefined', () => {
      const fn = () => Dialect.queryDefinitionType(undefined)
      expect(fn).to.throw(/invalid/i)
    })

    it('should throw an error if the definition has more than one type', () => {
      const definition = { type1: {}, type2: {} }
      const fn = () => Dialect.queryDefinitionType(definition)
      expect(fn).to.throw(/unrecognized/i)
    })

    it('should return the query definition type', () => {
      const definition = { type: {} }
      const definitionType = Dialect.queryDefinitionType(definition)
      expect(definitionType).to.equal('type')
    })
  })
})
