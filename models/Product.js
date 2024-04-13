// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // TODO Define columns for the Product model
    id: {
      type: DataTypes.INTEGER,         
      allowNull: false,                // Does not allow NULL values
      primaryKey: true,                
      autoIncrement: true,             // Automatically increments
    },
    product_name: {
      type: DataTypes.STRING,         
      allowNull: false,                
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),  // Data type is DECIMAL with precision 10 and scale 2
      allowNull: false,                
      validate: {
        isDecimal: true,               // Validates that the value is a decimal
      },
    },
    stock: {
      type: DataTypes.INTEGER,         
      allowNull: false,                
      defaultValue: 10,                // Default value is 10
      validate: {
        isInt: true,                   // Validates that the value is an integer
      },
    },
    category_id: {
      type: DataTypes.INTEGER,         
      references: {
        model: 'category',             // References the 'category' model
        key: 'id',                     // References the 'id' column in the 'category' model
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;


