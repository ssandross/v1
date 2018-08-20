var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('login');
});

router.post('/', function (req, res, next) {

  var data = {
    failed: false
  };

  res.render('login', data);
});


module.exports = router;
