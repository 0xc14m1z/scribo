# scribo

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f9938a97f4b74c18b14851e14e8fe8ef)](https://app.codacy.com/app/0xc14m1z/scribo?utm_source=github.com&utm_medium=referral&utm_content=0xc14m1z/scribo&utm_campaign=Badge_Grade_Dashboard) [![Build Status](https://travis-ci.org/0xc14m1z/scribo.svg?branch=master)](https://travis-ci.org/0xc14m1z/scribo)

Just a JavaScript SQL query builder from POJOs.

## Syntax

### DDL

#### Create Database

```js
const query = {
  create: {
    database: {
      name: 'databasename',
      characterSet: Dialect.characterSets.CHARACTER_SET,
      collate: Dialect.collation.COLLATION,
      ifNotExist: true
    }
  }
}
```

#### Alter Database

```js
const query = {
  alter: {
    database: {
      name: 'databasename',
      characterSet: Dialect.characterSets.CHARACTER_SET,
      collate: Dialect.collation.COLLATION
    }
  }
}
```

#### Drop Database

```js
const query = {
  drop: {
    database: 'databasename'
  }
}
```

#### Create Table

```js
const query = {
  create: {
    table: {
      name: 'tablename',
      columns: {
        'columnname': {
          type: Dialect.types.Type,
          primaryKey: true,
          unique: true,
          notNull: 'defaultvalue',
          foreignKey: {
            references: {
              table: 'tablename',
              columns: ['columnname', 'columnname']
            },
            on: {
              delete: Dialect.constraints.ON,
              update: Dialect.constraints.ON
            }
          }
        }
      },
      characterSet: Dialect.characterSets.CHARACTER_SET,
      collate: Dialect.collation.COLLATION,
      ifNotExist: true
    }
  }
}
```

#### Alter Table

```js
const query = {
  alter: {
    table: {
      add: {
        table: 'tablename',
        column: {
          'columnname': {
            type: Dialect.types.Type,
            primaryKey: true,
            unique: true,
            notNull: 'defaultvalue',
            foreignKey: {
              references: {
                table: 'tablename',
                columns: ['columnname', 'columnname']
              },
              on: {
                delete: Dialect.constraints.ON,
                update: Dialect.constraints.ON
              }
            }
          }
        }
      },
      modify: {
        table: 'tablename',
        column: {
          'columnname': {
            type: Dialect.types.Type,
            primaryKey: true,
            unique: true,
            notNull: 'defaultvalue',
            foreignKey: {
              references: {
                table: 'tablename',
                columns: ['columnname', 'columnname']
              },
              on: {
                delete: Dialect.constraints.ON,
                update: Dialect.constraints.ON
              }
            }
          }
        }
      },
      drop: 'columnname'
    }
  }
}
```

#### Drop Table

```js
const query = {
  drop: {
    table: {
      'tablename': {
        restrict: true
      }
    }
  }
}
```

#### Rename Table

```js
const query = {
  rename: {
    table: {
      'tablename': 'newtablename'
    }
  }
}
```

#### Create Index

```js
const query = {
  create: {
    index: {
      on: {
        table: 'tablename',
        columns: {
          'columnname': Dialect.indexOrder.ORDER
        }
      },
      unique: true
    }
  }
}
```

#### Drop Index

```js
const query = {
  drop: {
    index: {
      'tablename': 'indexname'
    }
  }
}
```
