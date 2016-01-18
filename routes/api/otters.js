var express = require('express');
var AWS     = require('aws-sdk');
var crypto  = require('crypto');
var mime    = require('mime');

var accessKeyId = process.env.ACCESSKEYID;
var secretAccessKey = process.env.SECRETACCESSKEY


AWS.config.region = 'us-east-1';
AWS.config.update({
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey
});

var s3 = new AWS.S3();

const S3_BASE_URL = 'https://s3.amazonaws.com/otterstream/'

var router = express.Router();

var Otter = require('../../models/otter');

router.get('/', function(req, res){
  Otter.find({}, function(err, otters) {
    res.json({ Otter: otters });
  });
});

router.post('/', function(req, res){
  if (!req.body.img) return res.status(400).send("Image not part of upload");

  var image = req.body.img;
  var meta = image.split(";")[0];
  var mimeT = meta.replace('data:','');
  image = image.replace(/^data:image\/png;base64,/, "");
  image = image.replace(/^data:image\/jpeg;base64,/, "");
  image = image.replace(/^data:image\/jpg;base64,/, "");

  var newFile = new Buffer(image, 'base64');
  var fileSize = newFile.length;
  var fileName = req.body.name;
  var ext = "."+mime.extension(mimeT);

  crypto.randomBytes(10, function(err,buf){
    var randFilename = buf.toString('hex');
    var finalFilename = randFilename + ext;

    var params = {
      Bucket: "otterstream",
      Key: finalFilename,
      Body: newFile,
      ACL: "public-read"
    }
    s3.upload(params, function(err, data) {
      console.log("      err",err);
      if (err) return res.status(400).send("Could not save image");

      var user = new Otter({
        name: req.body.name,
        lastname: req.body.lastname,
        bday: req.body.bday,
        zodiak: req.body.zodiak,
        bloodtype: req.body.bloodtype,
        placeOfBirth: req.body.placeOfBirth,
        currentCity: req.body.currentCity,
        favoriteBook: req.body.favoriteBook,
        favoriteSong: req.body.favoriteSong,
        favoriteMovie: req.body.favoriteMovie,
        favoriteFood: req.body.favoriteFood,
        favoriteTvShow: req.body.favoriteTvShow,
        gender: req.body.gender,
        gitHub: req.body.gitHub,
        linkedIn: req.body.linkedIn,
        website: req.body.website,
        facebook: req.body.facebook,
        twitter: req.body.twitter,
        instagram: req.body.instagram,
        tumblr: req.body.tumblr,
        languages: req.body.languages,
        coding: req.body.coding,
        bio: req.body.bio,
        img: S3_BASE_URL + finalFilename
      });
      user.save(function(err, dbOtter){
        console.log(dbOtter + "saved");
        console.log(err);
        if(err) return res.status(400).send("Could not save record");

        res.json(dbOtter);
      });
    });
  });
})

//aleksa staff

module.exports = router;
