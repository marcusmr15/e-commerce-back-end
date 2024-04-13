const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // TODO define columns
    id: {
      type: DataTypes.INTEGER,    
      allowNull: false,          
      primaryKey: true,           
      autoIncrement: true,        
    },
    tag_id: {
      type: DataTypes.INTEGER,    
      references: {
        model: "tag",             // References the 'tag' table
        key: "id",                // References the 'id' column in the 'tag' table
      },
    },
    product_id: {
      type: DataTypes.INTEGER,    
      references: {
        model: "product",         // References the 'product' table
        key: "id",                // References the 'id' column in the 'product' table
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
