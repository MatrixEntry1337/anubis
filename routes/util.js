var util = {};

util.processSuccess = function(res) {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);
};

util.processError = function(error) {
    console.log('Error: ' + error);
};

module.exports = util;