var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Anubis API' });
  // todo: insert api documentation
});

module.exports = router;
