var express = require('express');
var router = express.Router();
var env = require('../environment');
var util = require('./util');
var https = require('https');

var path = '/api/lol/static-data/NA/v1.2/';

router.get('/anubis/item_service/v1/api/item', function(req, res, next) {
   var request = https.get(env.host + path + 'item?itemListData=tags&api_key=' + env.apiKey,
       function(_res) {
           util.processExternalRequest(res, _res, next);
       });
   request.end();
});

router.get('/anubis/item_service/v1/api/item/:id', function(req, res, next) {
    var request = https.get(env.host  + path + 'item/' + req.params.id + '?itemData=all&api_key=' + env.apiKey,
        function(_res) {
            util.processExternalRequest(res, _res, next);
        });
    request.end();
});

module.exports = router;