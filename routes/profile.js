var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  if(req.cookies.token){
    res.render('profile');
  } else {
    res.render('index');
  }
});

module.exports = router;
