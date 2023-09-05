const { Router } = require("express");
const getCountries = require('../controllers/getCountries');
const getCountriesById = require("../controllers/getCountriesById");
const getCountriesByName = require("../controllers/getCountriesByName");
const postActivity = require("../controllers/postActivity");
const getActivitys = require("../controllers/getActivitys");


const router = Router();



router.get("/countries",getCountries );

router.get("/countries/name",getCountriesByName );

router.get("/countries/:id",getCountriesById );

router.post("/activities", postActivity)

router.get('/activities',getActivitys)

module.exports = router;
