const path = require('path')
const Sequelize = require('sequelize')
const { readdirSync } = require('fs')

const connection = require('../connection')

function isModelFile(file) {
  return (
    file !== path.basename(__filename) &&
    file.endsWith('.js') &&
    !file.endsWith('.test.js')
  )
}

function importModels(connection, folder) {
  return readdirSync(folder)
    .filter(isModelFile)
    .reduce((acc, file) => {
      const model = connection.import(path.join(folder, file))
      acc[model.name] = model
      return acc
    }, {})
}

const models = importModels(connection, __dirname)

const db = {
  Sequelize,
  Op: Sequelize.Op,
  connection,
  ...models,
}

Object.keys(db)
  .filter(model => db[model].associate)
  .forEach(model => db[model].associate(db))

module.exports = db
