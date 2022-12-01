'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employees.belongsTo(models.Departments, {
        foreignKey: 'departmentId',
        onDelete: 'CASCADE',
      })
      Employees.hasMany(models.Posts, {
        foreignKey: 'employeeId',
        as: 'posts',
      })
    }
  }
  Employees.init({
    name: DataTypes.STRING,
    slack_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Employees',
    underscored: true,
  });
  return Employees;
};