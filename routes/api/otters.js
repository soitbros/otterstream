var express = require('express');
var router = express.Router();

var Otter = require('../../models/otter');

router.get('/', function(req, res){
  Otter.find({}, function(err, otters) {
    res.json({ otters: otters });
  });
});

module.exports = router;
