const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const { Countries } = require('./src/db.js');
const PORT = 3001;

conn.sync({ force: true }).then(() => {
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
// console.log(Countries.findAll({}))
}).catch(error => console.error(error))
