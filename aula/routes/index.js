var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let cards = [
    {
      'path_image': './images/img1.jpg',
      'title': 'First Title',
      'text': 'Some quick example text to build on the card title and make up the bulk of the card content ',
      'button': 'See more'
    },
    {
      'path_image': './images/img3.jpg',
      'title': 'Second Title',
      'text': 'Some quick example text to build on the card title and make up the bulk of the card content ',
      'button': 'See more'
    },
    {
      'path_image': './images/img1.jpg',
      'title': 'Third Title',
      'text': 'Some quick example text to build on the card title and make up the bulk of the card content ',
      'button': 'See more'
    },
  ];
  res.render('index', { cards: cards });
});

module.exports = router;
