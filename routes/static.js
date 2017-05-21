var express = require('express');
var router = express.Router();
var env = require('../environment');
var https = require('https');

router.get('/anubis/champion_service/v1/api/champions', function(req, res, next){
    var request = https.get(env.host + '/api/lol/static-data/NA/v1.2/champion?champData=tags&api_key=' + env.apiKey, function (response) {
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
    });
    request.end();
});

module.exports = router;