var express = require('express');
var router = express.Router();

router.use(require('./champions'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Anubis API' });
});

module.exports = router;
