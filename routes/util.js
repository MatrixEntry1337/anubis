var util = {};

util.processExternalRequest = function(res, _res, next) {
    var data;
    console.log('statusCode:', _res.statusCode);
    console.log('headers:', _res.headers);
    _res.on('data', function(chunk) {
        data = chunk;
    });
    _res.on('error', function(error) {
        console.log('Error: ' + error);
        return next(error);
    });
    _res.on('end', function() {
        res.send(data);
    });
};

module.exports = util;