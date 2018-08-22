var express = require('express');
var router = express.Router();
var client = require('./../models/client');
var service = require('./../models/service');
var user = require('./../models/user');

/**
 * 
 */
router.get('/', function (req, res, next) {

    // service.find({ _id: ["5b7c1c095320f4331876cd6c", "5b7c5ab35320f4331876cd6e"] }, function (err, servicos) {
    //     console.log(servicos);
    // });


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
    data.client = req.session.client;

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

    var sessData = req.session;
    if (sessData.level > 2) {
        res.redirect('/admin');
        return;
    }

    // client.find({}, function (err, clients) {

    //     res.render('admin/user/form', { clients: clients });
    // });

    client.find({}).exec().then(function (clients) {
        var result = { clients: clients };
        return result;
    }).then(function (result) {
        return service.find({ client: sessData.client }).exec()
            .then(function (services) {
                result.services = services;
                return result;
            })
    }).then(function (result) {
        res.render('admin/user/form', result);
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

        res.redirect('/admin/user/new');
    });

});

module.exports = router;
