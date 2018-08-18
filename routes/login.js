var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {

  var data = {
    layout: false
  };

  res.render('login', data);
});

/**
 * 
 */
router.get('/fb', function (req, res, next) {

  var resp = { success: 'fb' };

  res.send(resp)

});

/**
 * 
 */
router.get('/google', function (req, res, next) {

  var resp = { success: 'google' };

  res.send(resp)

});

/**
 * 
 */
router.get('/linkedin', function (req, res, next) {

  var resp = { success: 'linkedin' };

  res.send(resp)

});

module.exports = router;
