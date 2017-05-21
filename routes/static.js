var express = require('express');
var router = express.Router();
var env = require('../environment');
var https = require('https');

function processRequest(response, res) {
    var data;
    console.log('statusCode:', response.statusCode);
    console.log('headers:', response.headers);
    response.on('data', function(chunk) {
        data = chunk;
    });
    response.on('error', function(error) {
        console.log('Error: ' + error);
        return next(error);
    });
    response.on('end', function() {
        res.send(data);
    });
}

router.get('/anubis/champion_service/v1/api/champion', function(req, res, next) {
    var request = https.get(env.host + '/api/lol/static-data/NA/v1.2/champion?champData=tags&api_key=' + env.apiKey, function(response) {
        processRequest(response, res);
    });
    request.end();
});

router.get('/anubis/champion_service/v1/api/champion/:id', function(req, res, next) {
    console.log(req.params.id);
    var request = https.get(env.host + '/api/lol/static-data/NA/v1.2/champion/' + req.params.id + '?champData=all&api_key=' + env.apiKey, function(response) {
        processRequest(response, res);
    });
    request.end();
});

module.exports = router;