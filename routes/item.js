var express = require('express');
var router = express.Router();
var env = require('../environment');
var util = require('./util');
var request = require('request');

var path = '/api/lol/static-data/NA/v1.2/';

router.get('/anubis/item_service/v1/api/item', function(req, res, next) {
    request
        .get(env.host + path + 'item?itemListData=tags&api_key=' + env.apiKey)
        .on('response', function(response) {
            util.processSuccess(response);
        })
        .on('error', function(error) {
            util.processError(error);
        })
        .pipe(res);
});

router.get('/anubis/item_service/v1/api/item/:id', function(req, res, next) {
    request
        .get(env.host  + path + 'item/' + req.params.id + '?itemData=all&api_key=' + env.apiKey)
        .on('response', function(response) {
            util.processSuccess(response);
        })
        .on('error', function(error) {
            util.processError(error);
        })
        .pipe(res);
});

module.exports = router;