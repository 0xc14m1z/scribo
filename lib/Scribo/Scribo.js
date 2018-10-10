const ANSI = require('../dialects/ANSI')

class Scribo {
  constructor(Dialect = ANSI) {
    this.dialect = new Dialect()
  }
}

module.exports = Scribo
