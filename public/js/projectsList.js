console.log('projects');
$(function(){
  console.log('jhvgjc');
  userProjectsShow();
});

var $idProject;
function userProjectsShow(){
  $('body').on('click', '.projectSum', function(e){
    e.preventDefault();
    $('.projectShow').empty();
    $idProject='';
    $idProject = $(this).attr("class").split(' ')[1];
    getProjectInfo($idProject)
})
}

var ottersDB;
function getProjectInfo(id){
  $.ajax({
    url: '/api/otters',
    success: function(data){
      ottersDB = data.Otter;
      for (var i = 0; i < ottersDB.length; i++) {
        var otter = ottersDB[i];
        for(var j=0;j<otter.projects.length;j++){
        var project = otter.projects[j];
          if (project['_id'] === id) {
              $('.profileShow').empty();
              showProject(project);
              return;
            }
      }
     }
      return;
    }
  })
}
  function showProject(project){
    console.log('heeeer');
    var $el = $('<div>').addClass('projectShow');
    $el.append( $('<div>').addClass('projectName').text(project.projectName) );
    $el.append( $('<div>').addClass('projectLanguage').text(project.projectLanguage) );
    $el.append( $('<img>').addClass('projectImg').attr('src' , project.projectImg) );
    $el.append( $('<div>').addClass('projectDescription').text(project.projectDescription) );
    $el.append( $('<div>').addClass('projectGitHubLink').text(project.projectGitHubLink) );
    $el.append( $('<div>').addClass('projectPublicLink').text(project.projectPublicLink) );
    $('body').append($el);
  }
