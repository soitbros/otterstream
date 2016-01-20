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
  $el.append( $('<div>').addClass('name').text(name + ' ' + lastname) );
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
    url: '/api/otters/profile',
    success: function(data){
      var id = data.Otter._id;
      var name = data.Otter.name;
      var lastname = data.Otter.lastname;
      var bday = data.Otter.bday;
      var zodiac = data.Otter.zodiac;
      var bloodtype = data.Otter.bloodtype;
      var placeOfBirth = data.Otter.placeOfBirth;
      var currentCity = data.Otter.currentCity;
      var favoriteBook = data.Otter.favoriteBook;
      var favoriteSong = data.Otter.favoriteSong;
      var favoriteMovie = data.Otter.favoriteMovie;
      var favoriteFood = data.Otter.favoriteFood;
      var favoriteTvShow = data.Otter.favoriteTvShow;
      var gender = data.Otter.gender;
      var gitHub = data.Otter.gitHub;
      var linkedIn = data.Otter.linkedIn;
      var website = data.Otter.website;
      var facebook = data.Otter.facebook;
      var twitter = data.Otter.twitter;
      var instagram = data.Otter.instagram;
      var tumblr = data.Otter.tumblr;
      var languages = data.Otter.languages;
      var coding = data.Otter.coding;
      var group = data.Otter.group;
      var graduate = data.Otter.graduate;
      var bio = data.Otter.bio;
      var img = data.Otter.img;
      makeDiv(id,name,lastname,bday,zodiac,bloodtype,placeOfBirth,currentCity,favoriteBook,favoriteSong,favoriteMovie,favoriteFood,favoriteTvShow,gender,gitHub,linkedIn,website,facebook,twitter,instagram,tumblr,languages,coding,group,graduate,bio,img);
    }
  });
}

//==Clint End ==//

//=======aleksa staff ==============

$(function(){
  setLogInFormHandler();
  setLogOutHandler();
  makeUsers();

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
      zodiac:otterData.zodiac,
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
      makeUsers();
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

// function createProject(profileID, projectData, callback){
//   callback = callback || function(){};
//   $.ajax({
//     url: '/api/haikus/' + projectID + '/projects',
//     method: 'post',
//     data: {comment: commentBody},
//     success: function(data){
//       var comment = data.comment;
//       callback(comment);
//     }
//   });
// }
//
// function renderProject(project){
//   var $el = $('<div>').addClass('comment');
//   $el.append( $('<h4>').addClass('username').text(comment.username) );
//   $el.append( $('<p>').addClass('comment-body').text(comment.body) );
//   return $el;
// }
//
// function setCommentFormHandler(){
//   $('body').on('submit', 'form#getProjectData', function(e){
//     e.preventDefault();
//     var profileID = $(this).find('input[name="profile-id"]').val();
//     var formProjectName = $(this).find('input[name="projectName"]').val();
//     var formProjectLanguage = $(this).find('input[name="projectLanguage"]').val();
//     var formProjectImg = $(this).find('input[name="projectImg"]').val();
//     var formProjectDescription = $(this).find('input[name="projectDescription"]').val();
//     var formProjectGitHubLink = $(this).find('input[name="projectGitHubLink"]').val();
//     var formProjectPublicLink = $(this).find('input[name="projectPublicLink"]').val();
//     var projectData = {
//       projectName:formProjectName,
//       projectLanguage:formProjectLanguage,
//       projectImg:formProjectImg,
//       projectDescription:formProjectDescription,
//       projectGitHubLink:formProjectGitHubLink,
//       projectPublicLink:formPublicLink
//     };
//     console.log(projectData);
//     createComment(profileID, projectData, function(project){
//     })
//   });
// }

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
