const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class VolumeUnits extends Model {}

VolumeUnits.init(
  {
    id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "volume_units",
  }
);