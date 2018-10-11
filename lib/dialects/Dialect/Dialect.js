class Dialect {
  static build(definition) {
    const type = Dialect.queryDefinitionType(definition)
    const innerDefinition = definition[type]

    try {
      return this[type](innerDefinition)
    } catch (error) {
      throw new Error('Unrecognized query definition type')
    }
  }

  static queryDefinitionType(definition) {
    let types
    try {
      types = Object.keys(definition)
    } catch (error) {
      throw new Error('Invalid query definition')
    }

    if (types.length === 1) {
      return types[0]
    }
    throw new Error('Unrecognized query definition type')
  }
}

module.exports = Dialect
