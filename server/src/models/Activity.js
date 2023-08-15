const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Activity", {
    id: { type: DataTypes.INTEGER, allowNull: false , primaryKey:true, autoIncremente:true },

    name: { type: DataTypes.STRING, allowNull: false},

    dificultad:{ type: DataTypes.ENUM('1', '2', '3', '4', '5'),allowNull: false},

    duracion:{type:DataTypes.INTEGER},

    temporada:{type:DataTypes.ENUM,
        values:['verano', 'otoño', 'invierno', 'primavera'],
        allowNull:false
    }
  });
};