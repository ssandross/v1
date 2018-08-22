var express = require('express');
var router = express.Router();
var user = require('./../models/user');

router.get('/', function (req, res, next) {
  res.render('login');
});

router.post('/', function (req, res, next) {

  var sessData = req.session;
  sessData.auth = false;
  sessData.client = false;
  sessData.admin = false;
  user.findOne({ mail: req.body.email }, function (err, user) {

    if (user != null) {

      sessData.auth = true;
      sessData.client = user.client;
      sessData.level = user.level;
      
      res.redirect('/admin');
      return;

    }

    res.render('login', { failed: true });

  });


});


module.exports = router;
