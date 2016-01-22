var name,lastname,bday,zodiac,bloodtype,placeOfBirth,currentCity,favoriteBook,favoriteSong,favoriteMovie,favoriteFood,favoriteTvShow,gender,gitHub,linkedIn,website,facebook,twitter,instagram,tumblr,languages,coding,group,graduate,bio;


function getProfileDataInfo(){
  console.log("inside");

  $.ajax({
    method: 'get',
    url: '/api/otters/profile',
    success: function(data){
      // console.log(data);

      name = data.Otter.name;
      lastname = data.Otter.lastname;
      bday = data.Otter.bday;
      zodiac = data.Otter.zodiac;
      bloodtype = data.Otter.bloodtype;
      placeOfBirth = data.Otter.placeOfBirth;
      currentCity = data.Otter.currentCity;
      favoriteBook = data.Otter.favoriteBook;
      favoriteSong = data.Otter.favoriteSong;
      favoriteMovie = data.Otter.favoriteMovie;
      favoriteFood = data.Otter.favoriteFood;
      favoriteTvShow = data.Otter.favoriteTvShow;
      gender = data.Otter.gender;
      gitHub = data.Otter.gitHub;
      linkedIn = data.Otter.linkedIn;
      website = data.Otter.website;
      facebook = data.Otter.facebook;
      twitter = data.Otter.twitter;
      instagram = data.Otter.instagram;
      tumblr = data.Otter.tumblr;
      languages = data.Otter.languages;
      coding = data.Otter.coding;
      group = data.Otter.group;
      graduate = data.Otter.graduate;
      bio = data.Otter.bio;
      img = data.Otter.img;


      setFormForEdit(name,lastname,bday,zodiac,bloodtype,placeOfBirth,currentCity,favoriteBook,favoriteSong,favoriteMovie,favoriteFood,favoriteTvShow,gender,gitHub,linkedIn,website,facebook,twitter,instagram,tumblr,languages,coding,group,graduate,bio,img)
    }
  })
}

function setFormForEdit(name,lastname,bday,zodiac,bloodtype,placeOfBirth,currentCity,favoriteBook,favoriteSong,favoriteMovie,favoriteFood,favoriteTvShow,gender,gitHub,linkedIn,website,facebook,twitter,instagram,tumblr,languages,coding,group,graduate,bio,img){
  console.log('setfornm', name);
  var $el = $('.editprofileform')
      var formName = $el.find('input[name="name"]').val(name);
      var formLastName = $el.find('input[name="lastname"]').val(lastname);
      var formBday = $el.find('input[name="bday"]').val(bday);
      var formZodiac = $el.find('select[name="zodiac"]').val(zodiac);
      var formBloodtype = $el.find('input[name="bloodtype"]').val(bloodtype);
      var formPlaceOfBirth = $el.find('input[name="placeOfBirth"]').val(placeOfBirth);
      var formCurrentCity = $el.find('input[name="currentCity"]').val(currentCity);
      var formFavoriteBook = $el.find('input[name="favoriteBook"]').val(favoriteBook);
      var formFavoriteSong = $el.find('input[name="favoriteSong"]').val(favoriteSong);
      var formFavoriteMovie = $el.find('input[name="favoriteMovie"]').val(favoriteMovie);
      var formFavoriteFood = $el.find('input[name="favoriteFood"]').val(favoriteFood);
      var formFavoriteTvShow = $el.find('input[name="favoriteTvShow"]').val(favoriteTvShow);
      var formGender = $el.find('input[name="gender"]').val(gender);
      var formGitHub = $el.find('input[name="gitHub"]').val(gitHub);
      var formLinkedIn = $el.find('input[name="linkedIn"]').val(linkedIn);
      var formWebsite = $el.find('input[name="website"]').val(website);
      var formFacebook = $el.find('input[name="facebook"]').val(facebook);
      var formTwitter = $el.find('input[name="twitter"]').val(twitter);
      var formInstagram = $el.find('input[name="instagram"]').val(instagram);
      var formTumblr = $el.find('input[name="tumblr"]').val(tumblr);
      var formLanguages = $el.find('input[name="languages"]').val(languages);
      var formCoding = $el.find('input[name="coding"]').val(coding);
      var formGroup = $el.find('input[name="group"]').val(group);
      var formGraduate = $el.find('input[name="graduate"]').val(graduate);
      var formBio = $el.find('textarea[name="bio"]').val(bio);
      var formUrl = $el.find('input[name="url"]').val(img);

}



function createProfileEdit(otterData, callback){
  callback = callback || function(){};
  $.ajax({
    method: 'PUT',
    data: {
      name: otterData.name,
      img: otterData.img,
      lastname:otterData.lastname,
      bday:otterData.bday,
      zodiac:otterData.zodiac,
      bloodtype:otterData.bloodtype,
      placeOfBirth:otterData.placeOfBirth,
      currentCity:otterData.currentCity,
      favoriteBook:otterData.favoriteBook,
      favoriteSong:otterData.favoriteSong,
      favoriteMovie:otterData.favoriteMovie,
      favoriteFood:otterData.favoriteFood,
      favoriteTvShow:otterData.favoriteTvShow,
      gender:otterData.gender,
      gitHub:otterData.gitHub,
      linkedIn:otterData.linkedIn,
      website:otterData.website,
      facebook:otterData.facebook,
      twitter:otterData.twitter,
      instagram:otterData.instagram,
      tumblr:otterData.tumblr,
      languages:otterData.languages,
      coding:otterData.coding,
      group:otterData.group,
      graduate:otterData.graduate,
      bio:otterData.bio,
    },
    url: '/api/otters/profile',
    success: function(data){
      console.log(data, 'aftrr submit');
      var img = data.img;
      callback(img);
    }
  });
}



function setProfileFormHandlerEdit(){
  $('form#editData').on('submit', function(e){
    e.preventDefault();
    // $('#img').attr('src','');
    var formName = $(this).find('input[name="name"]').val();
    var formLastName = $(this).find('input[name="lastname"]').val();
    var formBday = $(this).find('input[name="bday"]').val();
    var formZodiac = $(this).find('select[name="zodiac"]').val();
    var formBloodtype = $(this).find('input[name="bloodtype"]').val();
    var formPlaceOfBirth = $(this).find('input[name="placeOfBirth"]').val();
    var formCurrentCity = $(this).find('input[name="currentCity"]').val();
    var formFavoriteBook = $(this).find('input[name="favoriteBook"]').val();
    var formFavoriteSong = $(this).find('input[name="favoriteSong"]').val();
    var formFavoriteMovie = $(this).find('input[name="favoriteMovie"]').val();
    var formFavoriteFood = $(this).find('input[name="favoriteFood"]').val();
    var formFavoriteTvShow = $(this).find('input[name="favoriteTvShow"]').val();
    var formGender = $(this).find('input[name="gender"]').val();
    var formGitHub = $(this).find('input[name="gitHub"]').val();
    var formLinkedIn = $(this).find('input[name="linkedIn"]').val();
    var formWebsite = $(this).find('input[name="website"]').val();
    var formFacebook = $(this).find('input[name="facebook"]').val();
    var formTwitter = $(this).find('input[name="twitter"]').val();
    var formInstagram = $(this).find('input[name="instagram"]').val();
    var formTumblr = $(this).find('input[name="tumblr"]').val();
    var formLanguages = $(this).find('input[name="languages"]').val();
    var formCoding = $(this).find('input[name="coding"]').val();
    var formGroup = $(this).find('input[name="group"]').val();
    var formGraduate = $(this).find('input[name="graduate"]').val();
    var formBio = $(this).find('textarea[name="bio"]').val();
    var formUrl = $(this).find('input[name="url"]').val();
    var otterData = {

      name:formName,
      lastname:formLastName,
      bday:formBday,
      zodiac:formZodiac,
      bloodtype:formBloodtype,
      placeOfBirth:formPlaceOfBirth,
      currentCity:formCurrentCity,
      favoriteBook:formFavoriteBook,
      favoriteSong:formFavoriteSong,
      favoriteMovie:formFavoriteMovie,
      favoriteFood:formFavoriteFood,
      favoriteTvShow:formFavoriteTvShow,
      gender:formGender,
      gitHub:formGitHub,
      linkedIn:formLinkedIn,
      website:formWebsite,
      facebook:formFacebook,
      twitter:formTwitter,
      instagram:formInstagram,
      tumblr:formTumblr,
      languages:formLanguages,
      coding:formCoding,
      group:formGroup,
      graduate:formGraduate,
      bio:formBio,
      img: formUrl

    };
    console.log(otterData, 'otter datas');
    console.log('before callig');
    createProfileEdit(otterData, function(){
      console.log("done!");
    })
  });
}


$(function(){
  // setUpdateProfileFormHandler();
  // getProfileData()
  setProfileFormHandlerEdit();
  console.log('i m edit');
  getProfileDataInfo();

});
