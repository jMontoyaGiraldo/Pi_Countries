const {Activity} = require('../db.js')

const postActivity = async(req , res)=> {
    try {
      const { name , difficulty, duration, season, countries } = req.body;

      if(!name) return res.status(406).json({ error: 'missing name' });
      if(!difficulty) return res.status(406).json({ error: 'missing difficulty' });
      if(!season) return res.status(406).json({ error: 'missing season' });
      if(!countries) return res.status(406).json({ error: 'missing countries' });
     
      
      const[createdActivity , created] = await Activity.findOrCreate({
        where:{name},defaults:{difficulty, duration , season}});

        createdActivity.addCountries(countries)

      
        if (!created) {
          return res.status(201).json({ message: 'la actividad ya ha sido creada' });
        } else {
          return res.status(200).json(createdActivity);
        }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
}
    
module.exports= postActivity