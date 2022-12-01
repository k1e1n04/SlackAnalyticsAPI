'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Departments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Departments.belongsTo(models.Bases, {
        foreignKey: 'baseId',
        onDelete: 'CASCADE',
      })
    }
  }
  Departments.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Departments',
    underscored: true,
  });
  return Departments;
};