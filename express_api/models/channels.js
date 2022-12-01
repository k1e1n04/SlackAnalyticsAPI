'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Channels extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Channels.belongsTo(models.Departments, {
        foreignKey: 'departmentId',
        onDelete: 'CASCADE',
      })
      Channels.hasMany(models.Posts, {
        foreignKey: 'channelId',
        as: 'posts',
      })
    }
  }
  Channels.init({
    name: DataTypes.STRING,
    channel_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Channels',
    underscored: true,
  });
  return Channels;
};