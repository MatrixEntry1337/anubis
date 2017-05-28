var express = require('express');
var router = express.Router();
var env = require('../environment');
var util = require('./util');
var request = require('request');

var path = '/api/lol/static-data/NA/v1.2/';

router.get('/anubis/champion_service/v1/api/champion', function(req, res, next) {
    request
        .get(env.host + path + 'champion?champData=tags&api_key=' + env.apiKey)
        .on('response', function(response) {
            util.processSuccess(response);
        })
        .on('error', function(error) {
            util.processError(error);
        })
        .pipe(res);
});

router.get('/anubis/champion_service/v1/api/champion/:id', function(req, res, next) {
    request
        .get(env.host + path + 'champion/' + req.params.id + '?champData=all&api_key=' + env.apiKey)
        .on('response', function(response) {
            util.processSuccess(response);
        })
        .on('error', function(error) {
            util.processError(error);
        })
        .pipe(res);
});

module.exports = router;