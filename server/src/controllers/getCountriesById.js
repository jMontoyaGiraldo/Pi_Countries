const { Country } = require("../db.js");

const getCountriesById = async (req, res)=>{
    const {id} = req.params

    let idM= id.toUpperCase()

    try {
    const countryFind = await  Country.findOne({
      where: { id: idM },
      include: { all: true } // Esto cargará todas las asociaciones
    });
  
      return  res.status(200).json(countryFind)

    } catch (error) {
      return res.status(500).json({ error: error.message });
    }}


module.exports = getCountriesById
  