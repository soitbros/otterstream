console.log('...loaded');

//========chris=====////

      window.fbAsyncInit = function() {
      FB.init({
        appId      : '1499610890345471',
        cookie     : true,  // enable cookies to allow the server to access
                            // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.2' // use version 2.2
      });

      // Now that we've initialized the JavaScript SDK, we call
      // FB.getLoginStatus().  This function gets the state of the
      // person visiting this page and can return one of three states to
      // the callback you provide.  They can be:
      //
      // 1. Logged into your app ('connected')
      // 2. Logged into Facebook, but not your app ('not_authorized')
      // 3. Not logged into Facebook and can't tell if they are logged into
      //    your app or not.
      //
      // These three cases are handled in the callback function.

      FB.getLoginStatus(function(response) {
        statusChangeCallback(response);

      });

      };

      // Load the SDK asynchronously
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));





//======chris end====///

//====Clint start===?//
function logIn(username, password, callback) {
  $.ajax({
    method: 'post',
    url: 'api/users/authenticate',
    data: {username: username, password: password},
    success: function(data){
      $.cookie('token', data.token);
      callback(data);
    }
  });
}

function setLogInFormHandler(){
  $('form#log-in').on('submit', function(e){
    e.preventDefault();

    var usernameField = $(this).find('input[name="username"]');
    var username = usernameField.val();
    usernameField.val('');

    var passwordField = $(this).find('input[name="password"]');
    var password = passwordField.val();
    passwordField.val('');

    logIn(username, password, function(data){
      window.location.href = '/profile';
    });
  });
}

function setLogOutHandler(){
  $('form#log-out').on('submit', function(e){
    e.preventDefault();
    $.removeCookie('token');
    FB.logout(function(response) {
  console.log('user is now logged-out');
});
    window.location.href = '/';
  });
};

function   makeDiv(id,name,lastname,bday,zodiac,bloodtype,placeOfBirth,currentCity,favoriteBook,favoriteSong,favoriteMovie,favoriteFood,favoriteTvShow,gender,gitHub,linkedIn,website,facebook,twitter,instagram,tumblr,languages,coding,group,graduate,bio,img){
  var $el = $('<div>').addClass('container');
  $el.append( $('<div>').addClass('id').text(id) );
  $el.append( $('<div>').addClass('name').text(name) );
  $el.append( $('<div>').addClass('lastname').text(lastname) );
  $el.append( $('<div>').addClass('bday').text(bday) );
  $el.append( $('<div>').addClass('bloodtype').text(bloodtype) );
  $el.append( $('<div>').addClass('placeOfBirth').text(placeOfBirth) );
  $el.append( $('<div>').addClass('currentCity').text(currentCity) );
  $el.append( $('<div>').addClass('favoriteBook').text(favoriteBook) );
  $el.append( $('<div>').addClass('favoriteSong').text(favoriteSong) );
  $el.append( $('<div>').addClass('favoriteMovie').text(favoriteMovie) );
  $el.append( $('<div>').addClass('favoriteFood').text(favoriteFood) );
  $el.append( $('<div>').addClass('favoriteTvShow').text(favoriteTvShow) );
  $el.append( $('<div>').addClass('gender').text(gender) );
  $el.append( $('<div>').addClass('gitHub').text(gitHub) );
  $el.append( $('<div>').addClass('linkedIn').text(linkedIn) );
  $el.append( $('<div>').addClass('website').text(website) );
  $el.append( $('<div>').addClass('facebook').text(facebook) );
  $el.append( $('<div>').addClass('twitter').text(twitter) );
  $el.append( $('<div>').addClass('instagram').text(instagram) );
  $el.append( $('<div>').addClass('tumblr').text(tumblr) );
  $el.append( $('<div>').addClass('languages').text(languages) );
  $el.append( $('<div>').addClass('coding').text(coding) );
  $el.append( $('<div>').addClass('group').text(group) );
  $el.append( $('<div>').addClass('graduate').text(graduate) );
  $el.append( $('<div>').addClass('bio').text(bio) );
  $el.append( $('<img>').addClass('img').attr('src' , img) );

  $('.profile').append($el);
}

function makeUsers(){
  $.ajax({
    method: 'get',
    url: '/api/otters',
    success: function(data){
      for (var i = 0; i < data.Otter.length; i++) {
        var id = data.Otter[i]._id;
        var name = data.Otter[i].name;
        var lastname = data.Otter[i].lastname;
        var bday = data.Otter[i].bday;
        var zodiac = data.Otter[i].zodiac;
        var bloodtype = data.Otter[i].bloodtype;
        var placeOfBirth = data.Otter[i].placeOfBirth;
        var currentCity = data.Otter[i].currentCity;
        var favoriteBook = data.Otter[i].favoriteBook;
        var favoriteSong = data.Otter[i].favoriteSong;
        var favoriteMovie = data.Otter[i].favoriteMovie;
        var favoriteFood = data.Otter[i].favoriteFood;
        var favoriteTvShow = data.Otter[i].favoriteTvShow;
        var gender = data.Otter[i].gender;
        var gitHub = data.Otter[i].gitHub;
        var linkedIn = data.Otter[i].linkedIn;
        var website = data.Otter[i].website;
        var facebook = data.Otter[i].facebook;
        var twitter = data.Otter[i].twitter;
        var instagram = data.Otter[i].instagram;
        var tumblr = data.Otter[i].tumblr;
        var languages = data.Otter[i].languages;
        var coding = data.Otter[i].coding;
        var group = data.Otter[i].group;
        var graduate = data.Otter[i].graduate;
        var bio = data.Otter[i].bio;
        var img = data.Otter[i].img;
        makeDiv(id,name,lastname,bday,zodiac,bloodtype,placeOfBirth,currentCity,favoriteBook,favoriteSong,favoriteMovie,favoriteFood,favoriteTvShow,gender,gitHub,linkedIn,website,facebook,twitter,instagram,tumblr,languages,coding,group,graduate,bio,img);
      }
    }
  });
}

//==Clint End ==//

//=======aleksa staff ==============

$(function(){
  setLogInFormHandler();
  setLogOutHandler();
  makeUsers();
  console.log(req.user._id);

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
function createUser(otterData, callback){
  callback = callback || function(){};
  $.ajax({
    method: 'post',
    data: {
      name: otterData.name,
      img: otterData.img,
      lastname:otterData.lastname,
      bday:otterData.bday,
      zodiak:otterData.zodiak,
      bloodtype:otterData.bloodtype,
      placeOfBirth:otterData.placeOfBirth,
      currentCity:otterData.currentCity,
      favoriteBook:otterData.favoriteBook,
      favoriteSong:otterData.favoriteSong,
      favoriteMovie:otterData.favoriteMovie,
      favoriteFood:otterData.favoriteFood,
      formFavoriteTvShow:otterData.favoriteTvShow,
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
    var formGroup = $(this).find('input[name="group"]').val();
    var formGraduate = $(this).find('input[name="graduate"]').val();
    var formBio = $(this).find('textarea[name="bio"]').val();
    var formUrl = $(this).find('input[name="url"]').val();
    var otterData = {

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
    createUser(otterData, function(img){
      console.log('weeeee', img);
    })
  });
}

// =========================================
//======actually we don't use it===========
// ========================================
// function getAllImg(callback){
//   console.log('aaaaa');
//   callback = callback || function(){}
//     $.ajax({
//       url: '/api/otters',
//       success: function(data){
//         console.log(data.Otter + "wooow");
//         var images = data.Otter;
//         callback(images);
//       }
//     });
// }
//
//   function renderImage(image){
//     var images = image.img;
//     console.log("file reader   "+images);
//     var $el = ('#imgFromDB');
//       var $img = ( $('<img>').attr('src', images) );
//       $( "#imgFromDB" ).append( $img );
//
//   }
//
//   function updateImageAndViews(){
//     console.log('updateImageAndViews');
//     getAllImg(function(images){
//       console.log('here');
//       var $list = $('#imgFromDB');
//       renderImageList(images, $list)
//     })
//   }
//
//   function renderImageList(images, $list){
//     $list.empty();
//     var image;
//     for(var i = 0; i<images.length; i++){
//       image = images[i];
//       $imageView = renderImage(image);
//       $list.append($imageView);
//     }
//   }
// ===================================
// =====staff we don't use it ends=====
// =====================================

  //=========aleksa staff ends=========
