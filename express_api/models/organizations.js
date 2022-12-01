'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organizations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Organizations.hasMany(models.Bases, {
        foreignKey: 'organizationId',
        as: 'bases',
      })
      Organizations.hasMany(models.Users, {
        foreignKey: 'organizationId',
        as: 'users',
      })
    }
  }
  Organizations.init({
    name: DataTypes.STRING,
    slack_app_token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Organizations',
  });
  return Organizations;
};