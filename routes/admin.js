var express = require('express');
var router = express.Router();
var client = require('./../models/client');
var service = require('./../models/service');
var user = require('./../models/user');
var register = require('./../models/register');
var card = require('./../models/card');
var cardService = require('./../models/card-service');

var moment = require('moment');

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
router.get('/client', function (req, res, next) {
    client.find({}).exec().then(function (clients) {
        var result = { clients: clients };
        return result;
    }).then(function (result) {
        res.render('admin/client/index-client', result);
    });

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

        res.redirect('/admin/client/');

    });

});

router.get('/service', function (req, res, next) {
    service.find({ client: req.session.client }).exec().then(function (services) {
        var result = { services: services };
        return result;
    }).then(function (result) {
        res.render('admin/service/index-service', result);
    });

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

        res.redirect('/admin/service/new');
    });

});

/**
 * 
 */
router.get('/user', function (req, res, next) {
    user.find({ client: req.session.client }).exec().then(function (users) {
        var result = { users: users };
        return result;
    }).then(function (result) {
        res.render('admin/user/index-user', result);
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

/**
 * 
 */
router.get('/register/new', function (req, res, next) {
    res.render('admin/register/form');
});

/**
 * 
 */
router.post('/register/new', function (req, res, next) {

    var data = req.body;
    data.client = req.session.client;
    data.date = new Date();

    register.create(data, function (err, response) {
        if (err) {
            console.log(err);
            res.render('/admin/register/form');
        }

        res.redirect('/admin/register');

    });

});

/**
 * 
 */
router.get('/register', function (req, res, next) {
    
    register.find({ client: req.session.client }).exec().then(function (registers) {
        var result = { registers: registers };
        return result;
    }).then(function (result) {
        res.render('admin/register/index-register', result);
    });
});

/**
 * 
 */
router.get('/card/new', function (req, res, next) {

    var sessData = req.session;
    if (sessData.level > 2) {
        res.redirect('/admin');
        return;
    }

    var client = sessData.client;

    register.find({ client: client }).exec().then(function (registers) {
        var result = { registers: registers };
        return result;
    }).then(function (result) {
        res.render('admin/card/form', result);
    });



});

/**
 * 
 */
router.post('/card/new', function (req, res, next) {

    var data = req.body;
    data.client = req.session.client;
    data.status = true;
    data.date = new Date();

    card.create(data, function (err, response) {
        if (err) {
            console.log(err);
            res.render('/admin/card/form');
        }

        res.redirect('/admin/card/' + response.id);

    });

});

/**
 * 
 */
router.get('/card', function (req, res, next) {

    // { client: req.session.client }
    card.find().exec().then(function (cards) {
        var result = { cards: cards };
        return result;
    }).then(function (result) {
        res.render('admin/card/index-card', result);
    });

});

/**
 * 
 */
router.get('/card/:id', function (req, res, next) {

    service.find({ client: req.session.client }).exec()
        .then(function (services) {

            var data = {
                id: req.params.id,
                services: services
            };

            return data;
        })
        .then(function (data) {
            return card.findOne({ _id: data.id }).exec()
                .then(function (card) {
                    data.card = card;
                    return data;
                })
        })
        .then(function (data) {
            res.render('admin/card/add-service-card', data);
        });

});

/**
 * 
 */
router.post('/card/add-service-card', function (req, res, next) {

    var data = req.body;
    data.status = true;
    data.client = req.session.client;
    data.date = new Date();
    data.startDate = moment(data.startDate, 'DD/MM/YYYY HH:mm').format('YYYY-MM-DD HH:mm');
    data.endDate = moment(data.endDate, 'DD/MM/YYYY HH:mm').format('YYYY-MM-DD HH:mm');

    cardService.create(data, function (err, response) {
        if (err) {
            console.log(err);
        }

        res.redirect('/admin/card/' + data.cardId);

    });
});

/**
 * 
 */
router.get('/card-dates', function (req, res, next) {

    // var cardId = req.params.id;

    // { cardId: cardId }
    cardService.find().exec()
        .then(function (dates) {
            res.send(dates);
        });


});

module.exports = router;
