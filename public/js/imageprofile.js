$(function(){
  userProfile();
})

function userProfile(){
  $('body').on('click', '.img', function(e){
    e.preventDefault();
    console.log(this);
  })
}
