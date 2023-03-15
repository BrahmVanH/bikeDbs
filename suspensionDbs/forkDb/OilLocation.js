const { Model, DataTypes } = require("sequelize");
const sequelize = require("././config/connection");

class OilLocation extends Model {}

OilLocation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "oil_location",
  }
);

module.exports = OilLocation;
