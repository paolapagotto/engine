var express = require('express');
var router = express.Router();
const CardController = require('../controllers/CardController.js');

/* GET home page. */
router.get('/', CardController.index);

module.exports = router;
