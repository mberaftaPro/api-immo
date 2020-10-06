module.exports = (sequelize, DataTypes) => {
  const attributes = {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password_hash: {
      type: DataTypes.STRING,
    },
    password_salt: {
      type: DataTypes.STRING,
    },
    search_run_last_date: {
      type: DataTypes.DATE,
    },
    search_publication_last_date: {
      type: DataTypes.DATE,
    },
    refresh_token: {
      type: DataTypes.STRING,
    },
  }

  const User = sequelize.define('User', attributes, {
    tableName: 'users',
    underscored: true,
  })

  User.associate = models => {
    User.hasMany(models.SearchFilter, {
      foreignKey: 'user_id',
      sourceKey: 'id',
      constraint: false,
      onDelete: 'CASCADE',
      as: 'SearchFilters',
    })
  }

  return User
}
