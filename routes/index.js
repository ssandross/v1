var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  var data = {
    layout: false
  };

  res.render('site/index', data);
  
});

module.exports = router;
