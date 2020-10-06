const getTableOptions = tableName => ({
  tableName,
  underscored: true,
})

module.exports = (sequelize, DataTypes) => {
  const attributes = {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    user_id: {
      type: DataTypes.UUID,
    },
    search_key: {
      type: DataTypes.STRING,
    },
    search_value: {
      type: DataTypes.STRING,
    },
    search_operator: {
      type: DataTypes.STRING,
    },
  }

  const SearchFilter = sequelize.define(
    'SearchFilter',
    attributes,
    getTableOptions('search_filters')
  )
  SearchFilter.associate = function (models) {}
  return SearchFilter
}
