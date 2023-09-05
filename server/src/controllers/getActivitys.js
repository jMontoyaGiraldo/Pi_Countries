
const { Activity, Country, Country_Activity} = require("../db.js");

const getActivitys = async (req, res) => {
  try {
    const actividades = await Activity.findAll({ include: { all: true }})
    return res.status(200).json(actividades);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getActivitys;