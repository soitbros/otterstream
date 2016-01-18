console.log('...loaded');

//=======aleksa staff ==============

$(function(){

//get image from upload form and encode to base64
  function readImage() {
      if ( this.files && this.files[0] ) {
          var FR = new FileReader();
          FR.onload = function(e) {
               $('#img').attr( "src", e.target.result );
               $('#url').val(e.target.result);
          };
          FR.readAsDataURL( this.files[0] );
      }
  }
  $("#asd").change( readImage );
  setUserFormHandler();

}) ///finish main function on load


//create user with all our data
function createUser(imgData, callback){
  callback = callback || function(){};
  $.ajax({
    method: 'post',
    data: {
      name: imgData.name,
      img: imgData.img,
      lastname:imgData.lastname,
      bday:imgData.bday,
      zodiak:imgData.zodiak,
      bloodtype:imgData.bloodtype,
      placeOfBirth:imgData.placeOfBirth,
      currentCity:imgData.currentCity,
      favoriteBook:imgData.favoriteBook,
      favoriteSong:imgData.favoriteSong,
      favoriteMovie:imgData.favoriteMovie,
      favoriteFood:imgData.favoriteFood,
      formFavoriteTvShow:imgData.favoriteTvShow,
      gender:imgData.gender,
      gitHub:imgData.gitHub,
      linkedIn:imgData.linkedIn,
      website:imgData.website,
      facebook:imgData.facebook,
      twitter:imgData.twitter,
      instagram:imgData.instagram,
      tumblr:imgData.tumblr,
      languages:imgData.languages,
      coding:imgData.coding,
      group:imgData.group,
      graduate:imgData.graduate,
      bio:imgData.bio,
    },
    url: '/api/otters',
    success: function(data){
      var img = data.img;
      callback(img);
      console.log('dddddd', data);
    }
  });
}


function setUserFormHandler(){
  $('form#getData').on('submit', function(e){
    e.preventDefault();
    $('#img').attr('src','');
    var formName = $(this).find('input[name="name"]').val();
    var formLastName = $(this).find('input[name="lastname"]').val();
    var formBday = $(this).find('input[name="bday"]').val();
    var formZodiak = $(this).find('select[name="zodiak"]').val();
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
    var formGruop = $(this).find('input[name="group"]').val();
    var formGraduate = $(this).find('input[name="graduate"]').val();
    var formBio = $(this).find('textarea[name="bio"]').val();
    var formUrl = $(this).find('input[name="url"]').val();
    var imgData = {

      name:formName,
      lastname:formLastName,
      bday:formBday,
      zodiak:formZodiak,
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
    createUser(imgData, function(img){
      console.log('weeeee', img);
    })
  });
}

// =========================================
//======actually we don't use it===========
// ========================================
function getAllImg(callback){
  console.log('aaaaa');
  callback = callback || function(){}
    $.ajax({
      url: '/api/otters',
      success: function(data){
        console.log(data.Otter + "wooow");
        var images = data.Otter;
        callback(images);
      }
    });
}

  function renderImage(image){
    var images = image.img;
    console.log("file reader   "+images);
    var $el = ('#imgFromDB');
      var $img = ( $('<img>').attr('src', images) );
      $( "#imgFromDB" ).append( $img );

  }

  function updateImageAndViews(){
    console.log('updateImageAndViews');
    getAllImg(function(images){
      console.log('here');
      var $list = $('#imgFromDB');
      renderImageList(images, $list)
    })
  }

  function renderImageList(images, $list){
    $list.empty();
    var image;
    for(var i = 0; i<images.length; i++){
      image = images[i];
      $imageView = renderImage(image);
      $list.append($imageView);
    }
  }
// ===================================
// =====staff we don't use it ends=====
// =====================================

  //=========aleksa staff ends=========
