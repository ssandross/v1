var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('admin/index', { title: 'Calendar' });
});


router.get('/calendar', function (req, res, next) {

    var data = {
        layout: false
    };

    res.render('admin/calendar', data);
});

router.get('/client/new', function (req, res, next) {
    res.render('admin/client/form');
});

router.post('/client/new', function (req, res, next) {
    res.render('admin/client/form');
});


module.exports = router;
