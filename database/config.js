require('dotenv').config()

const { DB_HOST, DB_USER, DB_PASSWORD } = process.env

const baseConfig = {
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASSWORD,
  dialect: 'postgres',
}

module.exports = {
  development: {
    database: 'immo_development',
    ...baseConfig,
  },
  test: {
    database: 'immo_test',
    ...baseConfig,
  },
  production: {
    username: 'root',
    password: null,
    database: 'immo_production',
    host: '127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: false,
  },
}
