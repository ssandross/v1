var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/calendar', function(req, res, next) {
    res.render('admin/calendar', { title: 'Calendar' });
});

module.exports = router;
