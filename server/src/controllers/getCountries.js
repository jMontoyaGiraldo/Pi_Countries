const axios = require('axios');
const URL = 'http://localhost:5000/countries'
const { Country } = require('../db.js');

const getCountries = async (req, res)=>{
  try {
    const response = await axios(`${URL}`)
    const data = response.data;

    data.map(async element => {
      const id = element.cca3; 
      const name = element.name.common;
      const bandera = element.flags.png;
      const continentes = element.continents[0];
      const subregion = element.subregion;
      const area = element.area;
      const population = element.population;

      const [country, created] = await Country.findOrCreate({
        where: { id }, // Usa el campo único para buscar o crear
        defaults: {
          name,
          imagen_bandera: bandera,
          continente: continentes,
          subregion,
          area,
          population,
        },
      });
    })

    return  res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }}

  module.exports = getCountries