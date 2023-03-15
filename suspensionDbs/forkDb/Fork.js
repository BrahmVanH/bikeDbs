const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Fork extends Model {}

Fork.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    fork_model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    oil_location: {
      type: DataTypes.INTEGER,
      references: {
        model: "oilLocation",
        key: "id",
        unique: false,
      },
    },
    application: {
      type: DataTypes.INTEGER,
      references: {
        model: "subcomponentApplication",
        key: "id",
        unique: false,
      },
    },
    oil_type: {
      type: DataTypes.INTEGER,
      references: {
        model: "oilType",
        key: "id",
        unique: false,
      },
    },
    oil_volume: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    volume_units: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "fork",
  }
);

module.exports = Fork;
