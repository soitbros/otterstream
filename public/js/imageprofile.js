$(function(){
  userProfile();
})
var $id;
function userProfile(){
  $('body').on('click', '.img', function(e){
    e.preventDefault();
    $('.profileModal').toggle();
    $id='';
    $id = $(this).closest("div").attr("class").split(' ')[1];
    console.log($id + 'here have to change');
    getProfileInfo($id)
  })
}

var ottersDB;
function getProfileInfo($id){
  $.ajax({
    url: '/api/otters',
    success: function(data){
      ottersDB = data.Otter;
      for (var i = 0; i < ottersDB.length; i++) {
          if (ottersDB[i]['id'] === $id) {
              $('.profileModalBody').empty();
              $('.profileProjectsModal').empty();
              $('.profileBlogModal').empty();
              var avatar = ottersDB[i].img;
              if( (/\b\w*adorable\w*\b/g).test(avatar) ){
                avatar += ottersDB[i].img+ottersDB[i].name+ottersDB[i].lastname;
              }
              showProfile(ottersDB[i].name,ottersDB[i].lastname,ottersDB[i].bday,ottersDB[i].zodiac,ottersDB[i].bloodtype,ottersDB[i].placeOfBirth,ottersDB[i].currentCity,ottersDB[i].favoriteBook,ottersDB[i].favoriteSong,ottersDB[i].favoriteMovie,ottersDB[i].favoriteFood,ottersDB[i].favoriteTvShow,ottersDB[i].gender,ottersDB[i].gitHub,ottersDB[i].linkedIn,ottersDB[i].website,ottersDB[i].facebook,ottersDB[i].twitter,ottersDB[i].instagram,ottersDB[i].tumblr,ottersDB[i].languages,ottersDB[i].coding,ottersDB[i].group,ottersDB[i].graduate,ottersDB[i].bio,ottersDB[i].img,ottersDB[i].projects,ottersDB[i].blogs);
              return;
          }
      }
  }

      })
    }

    function showProfile(name,lastname,bday,zodiac,bloodtype,placeOfBirth,currentCity,favoriteBook,favoriteSong,favoriteMovie,favoriteFood,favoriteTvShow,gender,gitHub,linkedIn,website,facebook,twitter,instagram,tumblr,languages,coding,group,graduate,bio,img,projects,blogs){
      var $el = $('<div>').addClass('contain');
      var biorow = $('<div>').addClass('row align-center');
      var bioDeets = $('<div>').addClass('biodeets large-5 column');
      $el.append( $('<div>').addClass('namebar large-6 large-offset-3 column row').append($('<h1>').addClass('name').html( name + ' ' + lastname + '<h4>' + group + ' ' + graduate + '</h4>') ));
      $el.append( biorow.append($('<img>').addClass('profileimg large-5 column').attr('src' , img) ));
      $el.append( biorow.append(bioDeets.append($('<div>').addClass('bday').text('Birthdate: ' + bday) )));
      $el.append( biorow.append(bioDeets.append($('<div>').addClass('gender').text('Gender: ' + gender) )));
      $el.append( biorow.append(bioDeets.append($('<div>').addClass('zodiac').text('Zodiac Sign: ' + zodiac) )));
      $el.append( biorow.append(bioDeets.append($('<div>').addClass('bloodtype').text('Bloodtype: ' + bloodtype) )));
      $el.append( biorow.append(bioDeets.append($('<div>').addClass('placeOfBirth').html("Hometown <br /><img src='http://maps.googleapis.com/maps/api/staticmap?center=" + placeOfBirth + "&size=320x200&zoom=11&style=element:geometry.stroke|visibility:off&style=feature:landscape|element:geometry|saturation:-100&style=feature:water|saturation:-100|invert_lightness:true&key=AIzaSyDz4AJ9TK_qNtpYLKVmfYK6a8oVt4dL9yc' />") )));
      $el.append( biorow.append(bioDeets.append($('<div>').addClass('currentCity').html("Current City <br /><img src='http://maps.googleapis.com/maps/api/staticmap?center=" + currentCity + "&size=320x200&zoom=11&style=element:geometry.stroke|visibility:off&style=feature:landscape|element:geometry|saturation:-100&style=feature:water|saturation:-100|invert_lightness:true&key=AIzaSyDz4AJ9TK_qNtpYLKVmfYK6a8oVt4dL9yc' />") )));
      var tworow = $('<div>').addClass('row align-center');
      var personDeets = $('<div>').addClass('persondeets large-5 column');
      var profDeets = $('<div>').addClass('profdeets large-5 column');
      $el.append( tworow.append(personDeets.append($('<div>').addClass('languages').text('Languages: ' + languages) )));
      $el.append( tworow.append(personDeets.append($('<div>').addClass('favoriteBook').text('Favorite Book: ' + favoriteBook) )));
      $el.append( tworow.append(personDeets.append($('<div>').addClass('favoriteSong').text('Favorite Song: ' + favoriteSong) )));
      $el.append( tworow.append(personDeets.append($('<div>').addClass('favoriteMovie').text('Favorite Movie: ' + favoriteMovie) )));
      $el.append( tworow.append(personDeets.append($('<div>').addClass('favoriteTvShow').text('Favorite TV Show: ' + favoriteTvShow) )));
      $el.append( tworow.append(personDeets.append($('<div>').addClass('favoriteFood').text('Favorite Food: ' + favoriteFood) )));
      $el.append( tworow.append(personDeets.append($('<div>').addClass('bio').text('Bio: ' + bio) )));
      $el.append( tworow.append(profDeets.append($('<div>').addClass('coding').text('Coding Languages: ' + coding) )));
      $el.append( tworow.append(profDeets.append($('<div>').addClass('gitHub').html("<a target='_blank' href='http://www.github.com/" + gitHub + "'> GitHub </a>") )));
      $el.append( tworow.append(profDeets.append($('<div>').addClass('linkedIn').html("<a target='_blank' href='https://www.linkedin.com/in/" + linkedIn + "'> LinkedIn </a>") )));
      $el.append( tworow.append(profDeets.append($('<div>').addClass('facebook').html("<a target='_blank' href='https://www.facebook.com/" + facebook + "'> Facebook </a>") )));
      $el.append( tworow.append(profDeets.append($('<div>').addClass('twitter').html("<a target='_blank' href='https://www.twitter.com/" + twitter + "'> Twitter </a>") )));
      $el.append( tworow.append(profDeets.append($('<div>').addClass('instagram').html("<a target='_blank' href='https://www.instagram.com/" + instagram + "'> Instagram </a>") )));
      $el.append( tworow.append(profDeets.append($('<div>').addClass('tumblr').html("<a target='_blank' href='https://" + tumblr + ".tumblr.com/'> Tumblr </a>") )));
      $el.append( tworow.append(profDeets.append($('<div>').addClass('website').html("<a target='_blank' href='http://" + website + "'> Website </a>") )));
      for (var i = 0; i < projects.length; i++) {
        var project = projects[i];
        var $proj = $('<div>').addClass('profileproject ' + project._id);
        $proj.append( $('<div>').addClass('projectName').text(project.projectName) );
        $proj.append( $('<img>').addClass('projectImg').attr('src' , project.projectImg) );
        $('.profileProjectsModal').append($proj);
      }
      for (var i = 0; i < blogs.length; i++) {
        var blog = blogs[i];
        var $blog = $('<div>').addClass('profileblogpost');
        $blog.append( $('<div>').addClass('blogBody').html(blog.blogBody) );
        $('.profileBlogModal').append($blog);
      }

      $('.profileModalBody').append($el);
    }
