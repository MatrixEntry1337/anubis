var express = require('express');
var router = express.Router();

router.use(require('./static'));

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Anubis API' });
});

module.exports = router;
