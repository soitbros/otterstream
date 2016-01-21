function editProfile(otterData, callback){
  callback = callback || function(){};
  $.ajax({
    method: 'patch',
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
    url: '/api/otters',
    success: function(data){
      var img = data.img;
      callback(img);
      makeProfile();
    }
  });
}

function setProfileFormHandler(){
  $('form#getData').on('submit', function(e){
    e.preventDefault();
    $('#img').attr('src','');
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
    editProfile(otterData, function(img){
    })
  });
}
