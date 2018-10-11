const ANSI = require('../dialects/ANSI')

class Scribo {
  constructor(Dialect = ANSI) {
    this.dialect = new Dialect()
  }

  query(definition) {
    if (definition) {
      return this.dialect.build(definition)
    }
    throw new Error('Invalid query definition')
  }

  sql(definition) {
    return this.query(definition).sql
  }
}

module.exports = Scribo
