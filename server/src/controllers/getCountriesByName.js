const { Country } = require("../db.js");

const getCountriesByName = async (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: "El nombre del país es requerido" });
  }

  const firstLetter = name[0].toUpperCase();
  const restOfName = name.substring(1).toLowerCase();
  const fixedName = firstLetter + restOfName;

  try {
    const foundCountry = await Country.findOne({ where: { name: fixedName } , include: { all: true } });

    if (!foundCountry) {
      return res.status(404).json({ error: "Ese país no existe" });
    }

    return res.status(200).json(foundCountry);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getCountriesByName;
