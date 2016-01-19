var express = require('express');
var router = express.Router();
var User = require('../../models/user')


router.post('/', function(req, res){
  var userData = req.body.user;
  var newUser = new User(userData);
  newUser.save(function(err, databaseUser){
    res.redirect('/');
    console.log('created!');
  });
});


router.post('/authenticate', function(req, res){
  console.log('Authenticate tried');
  var username = req.body.username;
  var password = req.body.password;
  User.findOne({username:username}, function(err, databaseUser){
    databaseUser.authenticate(password, function(err, isMatch){
      if(isMatch){
        databaseUser.setToken(function(){
          res.json({description: 'rightyo passworderino', token: databaseUser.token});
        });
      } else {
        res.json({description: 'nope noper'});
      }
    })
  })
});

router.get('/', function(req, res){
  User.find({}, function(err, users) {
    res.json({ User: users });
  });
});


module.exports = router;
