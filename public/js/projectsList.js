console.log('projects');
$(function(){
  console.log('jhvgjc');
  userProjectsShow();
});

var $idProject;
function userProjectsShow(){
  $('body').on('click', '.projectSum', function(e){
    e.preventDefault();
    $('.project').toggle();
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
              $('.project').empty();
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
    var $el = $('<div>').addClass('projectShow');
    var projrow = $('<div>').addClass('row align-center');
    var projdeets = $('<div>').addClass('projdeets large-5 column');
    $el.append( $('<div>').addClass('namebar large-6 large-offset-3 column row').append($('<h1>').addClass('projectName').html( project.projectName) ));
    $el.append( projrow.append($('<img>').addClass('projectImg large-5 column').attr('src' , project.projectImg) ));
    $el.append( projrow.append(projdeets.append($('<div>').addClass('projectLanguage').text('Language: ' + project.projectLanguage) )));
    $el.append( projrow.append(projdeets.append($('<div>').addClass('projectDescription').text('Language: ' + project.projectDescription) )));
    $el.append( projrow.append(projdeets.append($('<div>').addClass('projectGitHubLink').html("<a target='_blank' href='https://www.github.com/" + project.projectGitHubLink + "'> GitHub Link </a>") )));
    $el.append( projrow.append(projdeets.append($('<div>').addClass('projectPublicLink').html("<a target='_blank' href='http://" + project.projectPublicLink + "'> Website </a>") )));
    $('.project').append($el);
  }
