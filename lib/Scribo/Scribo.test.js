/* eslint-env mocha */

const { expect } = require('chai')

const Scribo = require('./Scribo')
const ANSI = require('../dialects/ANSI')

describe('Scribo', () => {
  it('should run mocha', () => expect(true).to.equal(true))

  it('should use ANSI dialect if no one is specified', () => {
    const S = new Scribo()
    expect(S.dialect).to.be.an.instanceof(ANSI)
  })
})
