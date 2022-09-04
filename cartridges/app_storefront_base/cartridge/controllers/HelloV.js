'use strict';

var server = require('server');

server.get('Start', function (req, res, next) {
    res.render('one/Hello', {
        param2: "Kolya"
    });
    next();
});

server.post('StartPost', function (req, res, next) {
    res.json({
        test: "test"
    });
    next();
});

module.exports = server.exports();
