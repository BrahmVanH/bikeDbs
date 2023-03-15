const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class SubComponentApplication extends Model {}

SubComponentApplication.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    application: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "sub_component_application",
  }
);

module.exports = SubComponentApplication;
