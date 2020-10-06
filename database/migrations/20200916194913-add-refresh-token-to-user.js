module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users',
      'refresh_token',
      Sequelize.STRING(2048)
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'refresh_token')
  },
}
