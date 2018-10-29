/* eslint-env mocha */

const { expect } = require('chai')

const Scribo = require('./Scribo')
const ANSI = require('../dialects/ANSI')

describe('Scribo', () => {
  describe('#constructor', () => {
    it('should use ANSI dialect if no one is specified', () => {
      const S = new Scribo()
      expect(S.dialect).to.be.an.instanceof(ANSI)
    })

    it('should use given dialect', () => {
      class Dialect {}
      const S = new Scribo(Dialect)
      expect(S.dialect).to.be.an.instanceof(Dialect)
    })
  })

  describe('#query', () => {
    let S

    before(() => {
      S = new Scribo()
    })

    it('should throw an error if no definition is given', () => {
      const fn = () => S.query()
      expect(fn).to.throw(/invalid/i)
    })

    it('should throw an error if the given definition is unrecognizable', () => {
      const definition = { unrecognizedType: {} }
      const fn = () => S.query(definition)
      expect(fn).to.throw(/unrecognized/i)
    })

    it('should return a query builder object')
  })

  describe('#sql', () => {
    let S

    before(() => {
      S = new Scribo()
    })

    it('should throw an error if no definition is given', () => {
      const fn = () => S.sql()
      expect(fn).to.throw(/invalid/i)
    })

    it('should throw an error if the given definition is unrecognizable')
    it('should return the sql string representation')
  })
})
