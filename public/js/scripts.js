console.log('...loaded');

window.fbAsyncInit = function() {
  FB.init({
    appId      : '1499610890345471',
    cookie     : true,
    xfbml      : true,
    version    : 'v2.2'
  });
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

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

function   makeDiv(name,lastname,bday,zodiac,bloodtype,placeOfBirth,currentCity,favoriteBook,favoriteSong,favoriteMovie,favoriteFood,favoriteTvShow,gender,gitHub,linkedIn,website,facebook,twitter,instagram,tumblr,languages,coding,group,graduate,bio,img){
  var $el = $('<div>').addClass('container');
  $el.append( $('<div>').addClass('name').text(name + ' ' + lastname) );
  $el.append( $('<div>').addClass('bday').text(bday) );
  $el.append( $('<div>').addClass('zodiac').text(zodiac) );
  $el.append( $('<div>').addClass('bloodtype').text(bloodtype) );
  $el.append( $('<div>').addClass('placeOfBirth').text(placeOfBirth) );
  $el.append( $('<div>').addClass('currentCity').text(currentCity) );
  $el.append( $('<div>').addClass('favoriteBook').text(favoriteBook) );
  $el.append( $('<div>').addClass('favoriteSong').text(favoriteSong) );
  $el.append( $('<div>').addClass('favoriteMovie').text(favoriteMovie) );
  $el.append( $('<div>').addClass('favoriteFood').text(favoriteFood) );
  $el.append( $('<div>').addClass('favoriteTvShow').text(favoriteTvShow) );
  $el.append( $('<div>').addClass('gender').text(gender) );
  $el.append( $('<a>').addClass('gitHub').text("http://www.github.com/" + gitHub) );
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
      makeDiv(name,lastname,bday,zodiac,bloodtype,placeOfBirth,currentCity,favoriteBook,favoriteSong,favoriteMovie,favoriteFood,favoriteTvShow,gender,gitHub,linkedIn,website,facebook,twitter,instagram,tumblr,languages,coding,group,graduate,bio,img);
    }
  });
}

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
    createUser(otterData, function(img){
    })
  });
}

function createProject(projectData, callback){
  callback = callback || function(){};
  $.ajax({
    url: '/api/otters/projects',
    method: 'post',
    data: {projectData},
    success: function(data){
      var project = data.project;
      callback(project);
    }
  });
}

function renderProject(project){
  var $el = $('<div>').addClass('project');
  $el.append( $('<div>').addClass('projectName').text(project.projectName) );
  $el.append( $('<div>').addClass('projectLanguage').text(project.projectLanguage) );
  $el.append( $('<img>').addClass('projectImg').attr('src' , projectImg) );
  $el.append( $('<div>').addClass('projectDescription').text(project.projectDescription) );
  $el.append( $('<div>').addClass('projectGitHubLink').text(project.projectGitHubLink) );
  $el.append( $('<div>').addClass('projectPublicLink').text(project.projectPublicLink) );

  $('.profile').append($el);
}

function setBlogFormHandler(){
  $('form#getBlogData').on('submit', function(e){
    e.preventDefault();
    var formBlogBody = $(this).find('textarea[name="blogBody"]').val();
    var blogData = {
      blogBody:formBlogBody,
    };
    createBlog(blogData, function(blog){
    })
  });
}

function createBlog(blogData, callback){
  callback = callback || function(){};
  $.ajax({
    url: '/api/otters/blogs',
    method: 'post',
    data: {blogData},
    success: function(data){
      var blog = data.blog;
      callback(blog);
    }
  });
}

function renderBlog(blog){
  var $el = $('<div>').addClass('project');
  $el.append( $('<div>').addClass('blogBody').html(blog.blogBody) );

  $('.profile').append($el);
}

function setProjectFormHandler(){
  $('form#getProjectData').on('submit', function(e){
    e.preventDefault();
    var formProjectName = $(this).find('input[name="projectName"]').val();
    var formProjectLanguage = $(this).find('input[name="projectLanguage"]').val();
    var formProjectImg = $(this).find('input[name="projectImg"]').val();
    var formProjectDescription = $(this).find('input[name="projectDescription"]').val();
    var formProjectGitHubLink = $(this).find('input[name="projectGitHubLink"]').val();
    var formProjectPublicLink = $(this).find('input[name="projectPublicLink"]').val();
    var projectData = {
      projectName:formProjectName,
      projectLanguage:formProjectLanguage,
      projectImg:formProjectImg,
      projectDescription:formProjectDescription,
      projectGitHubLink:formProjectGitHubLink,
      projectPublicLink:formProjectPublicLink
    };
    createProject(projectData, function(project){
    })
  });
}

function createProject(projectData, callback){
  callback = callback || function(){};
  $.ajax({
    url: '/api/otters/projects',
    method: 'post',
    data: {projectData},
    success: function(data){
      var project = data.project;
      callback(project);
    }
  });
}

function renderProject(project){
  var $el = $('<div>').addClass('project');
  $el.append( $('<div>').addClass('projectName').text(project.projectName) );
  $el.append( $('<div>').addClass('projectLanguage').text(project.projectLanguage) );
  $el.append( $('<img>').addClass('projectImg').attr('src' , projectImg) );
  $el.append( $('<div>').addClass('projectDescription').text(project.projectDescription) );
  $el.append( $('<div>').addClass('projectGitHubLink').text(project.projectGitHubLink) );
  $el.append( $('<div>').addClass('projectPublicLink').text(project.projectPublicLink) );

  $('.profile').append($el);
}

function setBlogFormHandler(){
  $('form#getBlogData').on('submit', function(e){
    e.preventDefault();
    var formBlogBody = $(this).find('textarea[name="blogBody"]').val();
    var blogData = {
      blogBody:formBlogBody,
    };
    createBlog(blogData, function(blog){
    })
  });
}

function createBlog(blogData, callback){
  callback = callback || function(){};
  $.ajax({
    url: '/api/otters/blogs',
    method: 'post',
    data: {blogData},
    success: function(data){
      var blog = data.blog;
      callback(blog);
    }
  });
}

function renderBlog(blog){
  var $el = $('<div>').addClass('project');
  $el.append( $('<div>').addClass('blogBody').html(blog.blogBody) );

  $('.profile').append($el);
}



$(function(){
  setLogInFormHandler();
  setProjectFormHandler();
  setBlogFormHandler();
  setLogOutHandler();
  makeUsers();

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

})
