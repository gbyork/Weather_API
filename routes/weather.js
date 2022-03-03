var express = require('express');
var router = express.Router();
const weathercontroller = require('../controllers/weathercontroller');

/* GET users listing. */
router.get('/', weathercontroller.get_weather);

module.exports = router;