var express = require('express');
var router = express.Router();
var env = require('../environment');
var util = require('./util');
var https = require('https');

var path = '/api/lol/static-data/NA/v1.2/';

router.get('/anubis/champion_service/v1/api/champion', function(req, res, next) {
    var request = https.get(env.host + path + 'champion?champData=tags&api_key=' + env.apiKey,
        function(_res) {
            util.processExternalRequest(res, _res, next);
        });
    request.end();
});

router.get('/anubis/champion_service/v1/api/champion/:id', function(req, res, next) {
    var request = https.get(env.host + path + 'champion/' + req.params.id + '?champData=all&api_key=' + env.apiKey,
        function(_res) {
            util.processExternalRequest(res, _res, next);
        });
    request.end();
});

module.exports = router;