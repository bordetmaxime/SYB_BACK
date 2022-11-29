const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Box extends Model {}

Box.init({
 box_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  box_title: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: '',
  },
  box_description: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: '',
  },
  box_category: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: '',
  },
  box_link: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: '',
  },
  box_user_id: DataTypes.INTEGER,
},
   {
  sequelize,
  createdAt: 'box_created_at',
  updatedAt: 'box_updated_at',
  tableName: 'box',
});

module.exports = Box;