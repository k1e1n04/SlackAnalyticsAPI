'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bases extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bases.belongsTo(models.Organizations, {
        foreignKey: 'organizationId',
        onDelete: 'CASCADE',
      })
      Bases.hasMany(models.Departments, {
        foreignKey: 'baseId',
        as: 'departments',
      })
    }
  }
  Bases.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bases',
  });
  return Bases;
};