const models = require('./models')
const notValidKeys = ['Sequelize', 'Op', 'connection', 'sequelize']
const validKeys = Object.keys(models).filter(key => !notValidKeys.includes(key))

const truncate = async () => {
  await Promise.all(
    validKeys.map(async key => {
      await models[key].destroy({ where: {}, force: true })
    })
  )
}

module.exports = truncate
