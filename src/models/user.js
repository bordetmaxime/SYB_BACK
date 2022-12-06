const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class User extends Model {}

User.init({
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_firstname: {
    type: DataTypes.STRING(7),
    allowNull: false,
    defaultValue: '',
  },
  user_lastname: {
    type: DataTypes.STRING(7),
    allowNull: false,
    defaultValue: "",
  },
  user_email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: "",
  },
  user_password: {
    type: DataTypes.STRING(100),
    allowNull: false,
    defaultValue: "",
}},
   {
  sequelize,
  createdAt: 'user_created_at',
  updatedAt: 'user_updated_at',
  tableName: 'user',
});

module.exports = User;