$(function(){
  userProjects();
})
var $id;
function userProjects(){
  $('body').on('click', '.projectSum', function(e){
    e.preventDefault();
    console.log(this);
    $id='';
    // $id = $(this).closest("div").attr("class").split(' ')[1];
    // console.log($id + 'here have to change');
    // getProfileInfo($id)
  })
}

// var ottersDB;
// function getProfileInfo($id){
//   $.ajax({
//     url: '/api/otters',
//     success: function(data){
//       ottersDB = data.Otter;
//       for (var i = 0; i < ottersDB.length; i++) {
//           if (ottersDB[i]['id'] === $id) {
//               $('.profileShow').empty();
//               var avatar = ottersDB[i].img;
//               if( (/\b\w*adorable\w*\b/g).test(avatar) ){
//                 avatar += ottersDB[i].img+ottersDB[i].name+ottersDB[i].lastname;
//               }
//               showProfile(ottersDB[i].name,ottersDB[i].lastname,ottersDB[i].bday,ottersDB[i].zodiac,ottersDB[i].bloodtype,ottersDB[i].placeOfBirth,ottersDB[i].currentCity,ottersDB[i].favoriteBook,ottersDB[i].favoriteSong,ottersDB[i].favoriteMovie,ottersDB[i].favoriteFood,ottersDB[i].favoriteTvShow,ottersDB[i].gender,ottersDB[i].gitHub,ottersDB[i].linkedIn,ottersDB[i].website,ottersDB[i].facebook,ottersDB[i].twitter,ottersDB[i].instagram,ottersDB[i].tumblr,ottersDB[i].languages,ottersDB[i].coding,ottersDB[i].group,ottersDB[i].graduate,ottersDB[i].bio,ottersDB[i].img);
//               return;
//           }
//       }
//   }
