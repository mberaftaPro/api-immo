module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      first_name: {
        type: Sequelize.STRING,
      },
      last_name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password_hash: {
        type: Sequelize.STRING,
      },
      password_salt: {
        type: Sequelize.STRING,
      },
      search_run_last_date: {
        type: Sequelize.DATE,
      },
      search_publication_last_date: {
        type: Sequelize.DATE,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  },
}
