var mongoose = require('mongoose');

var otterSchema = mongoose.Schema({
  name: { type: String},
  lastname: { type: String },
  bday: { type: String },
  zodiac: { type: String },
  bloodtype: { type: String },
  placeOfBirth: { type: String },
  currentCity: { type: String },
  favoriteBook: { type: String },
  favoriteSong: { type: String },
  favoriteMovie: { type: String },
  favoriteFood: { type: String },
  favoriteTvShow: { type: String },
  gender: { type: String },
  gitHub: { type: String },
  linkedIn: { type: String },
  website: { type: String },
  facebook: { type: String },
  twitter: { type: String },
  instagram: { type: String },
  tumblr: { type: String },
  languages: { type: String },
  coding: { type: String },
  group: { type: String },
  graduate: { type: String },
  bio: { type: String },
  img: { type: String},
  id: {type: String},
  // projects: [ProjectSchema]
}, { timestamps: true });


// var ProjectSchema = mongoose.Schema({
//   projectName: { type: String },
//   projectLanguage: { type: String },
//   projectImg: { type: String },
//   projectDescription: { type: String },
//   projectGitHubLink: { type: String },
//   projectPublicLink: { type: String }
// }, { timestamps: true });

module.exports = mongoose.model('Otter', otterSchema);
