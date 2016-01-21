$(function(){
  userProfile();
})
var $id;
function userProfile(){
  $('body').on('click', '.img', function(e){
    e.preventDefault();
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
              $('.profileShow').empty();
              var avatar = ottersDB[i].img;
              if( (/\b\w*adorable\w*\b/g).test(avatar) ){
                avatar += ottersDB[i].img+ottersDB[i].name+ottersDB[i].lastname;
              }
              showProfile(ottersDB[i].name,ottersDB[i].lastname,ottersDB[i].bday,ottersDB[i].zodiac,ottersDB[i].bloodtype,ottersDB[i].placeOfBirth,ottersDB[i].currentCity,ottersDB[i].favoriteBook,ottersDB[i].favoriteSong,ottersDB[i].favoriteMovie,ottersDB[i].favoriteFood,ottersDB[i].favoriteTvShow,ottersDB[i].gender,ottersDB[i].gitHub,ottersDB[i].linkedIn,ottersDB[i].website,ottersDB[i].facebook,ottersDB[i].twitter,ottersDB[i].instagram,ottersDB[i].tumblr,ottersDB[i].languages,ottersDB[i].coding,ottersDB[i].group,ottersDB[i].graduate,ottersDB[i].bio,ottersDB[i].img);
              return;
          }
      }
  }

      })
    }

    function showProfile(name,lastname,bday,zodiac,bloodtype,placeOfBirth,currentCity,favoriteBook,favoriteSong,favoriteMovie,favoriteFood,favoriteTvShow,gender,gitHub,linkedIn,website,facebook,twitter,instagram,tumblr,languages,coding,group,graduate,bio,img){
      var $el = $('<div>').addClass('profileShow');
      $el.append( $('<div>').addClass('name').text(name+' '+lastname) );
      $el.append( $('<div>').addClass('bday').text(bday) );
      $el.append( $('<img>').addClass('img').attr('src' , img) );
      $el.append( $('<div>').addClass('gender').text(gender) );
      $el.append( $('<div>').addClass('zodiac').text(zodiac) );
      $el.append( $('<div>').addClass('bloodtype').text(bloodtype) );
      $el.append( $('<div>').addClass('placeOfBirth').html("<img src='http://maps.googleapis.com/maps/api/staticmap?center=" + placeOfBirth + "&size=320x200&zoom=11&style=element:geometry.stroke|visibility:off&style=feature:landscape|element:geometry|saturation:-100&style=feature:water|saturation:-100|invert_lightness:true&key=AIzaSyDz4AJ9TK_qNtpYLKVmfYK6a8oVt4dL9yc' />") );
      $el.append( $('<div>').addClass('currentCity').html("<img src='http://maps.googleapis.com/maps/api/staticmap?center=" + currentCity + "&size=320x200&zoom=11&style=element:geometry.stroke|visibility:off&style=feature:landscape|element:geometry|saturation:-100&style=feature:water|saturation:-100|invert_lightness:true&key=AIzaSyDz4AJ9TK_qNtpYLKVmfYK6a8oVt4dL9yc' />") );
      $el.append( $('<div>').addClass('languages').text(languages) );
      $el.append( $('<div>').addClass('coding').text(coding) );
      $el.append( $('<div>').addClass('group').text(group) );
      $el.append( $('<div>').addClass('graduate').text(graduate) );
      $el.append( $('<div>').addClass('favoriteBook').text(favoriteBook) );
      $el.append( $('<div>').addClass('favoriteSong').text(favoriteSong) );
      $el.append( $('<div>').addClass('favoriteMovie').text(favoriteMovie) );
      $el.append( $('<div>').addClass('favoriteFood').text(favoriteFood) );
      $el.append( $('<div>').addClass('favoriteTvShow').text(favoriteTvShow) );
      $el.append( $('<div>').addClass('gitHub').html("<a target='_blank' href='http://www.github.com/" + gitHub + "'> GitHub </a>") );
      $el.append( $('<div>').addClass('linkedIn').html("<a target='_blank' href='https://www.linkedin.com/in/" + linkedIn + "'> LinkedIn </a>") );
      $el.append( $('<div>').addClass('facebook').html("<a target='_blank' href='https://www.facebook.com/" + facebook + "'> Facebook </a>") );
      $el.append( $('<div>').addClass('twitter').html("<a target='_blank' href='https://www.twitter.com/" + twitter + "'> Twitter </a>") );
      $el.append( $('<div>').addClass('instagram').html("<a target='_blank' href='https://www.instagram.com/" + instagram + "'> Instagram </a>") );
      $el.append( $('<div>').addClass('tumblr').html("<a target='_blank' href='https://" + tumblr + ".tumblr.com/'> Tumblr </a>") );
      $el.append( $('<div>').addClass('website').html("<a target='_blank' href='http://" + website + "'> Website </a>") );
      $el.append( $('<div>').addClass('bio').text(bio) );

      $('body').append($el);
    }
