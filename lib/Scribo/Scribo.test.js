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

  describe('#build', () => {
    it('should throw an error if the given query is unrecognizable')
    it('should return the query object and the sql')
  })
})
