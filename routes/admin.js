var express = require('express');
var router = express.Router();
var client = require('./../models/client');
var service = require('./../models/service');
var user = require('./../models/user');

/**
 * 
 */
router.get('/', function (req, res, next) {
    res.render('admin/index', { title: 'Calendar' });
});

/**
 * 
 */
router.get('/calendar', function (req, res, next) {

    var data = {
        layout: false
    };

    res.render('admin/calendar', data);
});

/**
 * 
 */
router.get('/client/new', function (req, res, next) {
    res.render('admin/client/form');
});

/**
 * 
 */
router.post('/client/new', function (req, res, next) {

    var data = req.body;
    data.date = new Date();

    client.create(data, function (err, response) {
        if (err) {
            console.log(err);
            res.render('/admin/client/form');
        }

        res.redirect('/admin/client/' + response.id);

    });
    
});

/**
 * 
 */
router.get('/client/:id', function (req, res, next) {
    res.render('admin/client/index-client');
});

/**
 * 
 */
router.get('/service/new', function (req, res, next) {
    res.render('admin/service/form');
});

/**
 * 
 */
router.post('/service/new', function (req, res, next) {

    var data = req.body;
    data.date = new Date();

    service.create(data, function (err, response) {
        if (err) {
            console.log(err);
        }

        var data = {
            id: response.id
        };

        res.redirect('/admin/service/new');
    });

});

/**
 * 
 */
router.get('/user/new', function (req, res, next) {
    client.find({}, function (err, clients) {

        res.render('admin/user/form', { clients: clients });
    });
});

/**
 * 
 */
router.post('/user/new', function (req, res, next) {

    var data = req.body;
    data.date = new Date();

    user.create(data, function (err, response) {
        if (err) {
            console.log(err);
        }

        var data = {
            id: response.id
        };

        res.redirect('/admin/user/new');
    });

});


module.exports = router;
