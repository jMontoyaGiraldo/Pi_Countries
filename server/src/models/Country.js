const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Country", {
    id: { type: DataTypes.STRING(3), allowNull: false , primaryKey:true },

    name: { type: DataTypes.STRING(50), allowNull: false},

    flag:{ type: DataTypes.STRING, allowNull: false},

    continents:
    {type: DataTypes.STRING,
      // type: DataTypes.ENUM("North America", "Central America", "South America", "Europe", "Asia", "Africa", "Oceania"),
      allowNull: false},

    subregion: { type: DataTypes.STRING},

    area: { type: DataTypes.DOUBLE},

    population: { type: DataTypes.INTEGER , allowNull:false},
  }, { timestamps: false });
};
