const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Category extends Model {}

Category.init(
  {
    // 'id' columns
    id: {
      type: DataTypes.INTEGER,       
      allowNull: false,              
      primaryKey: true,              
      autoIncrement: true,           
    },
    // 'category_name' column
    category_name: {
      type: DataTypes.STRING,        
      allowNull: false,  // allowNull constraint
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;


