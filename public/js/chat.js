var socket = io.connect();
var $name='';
var $img;
function GetName(){
  $.ajax({
    method: 'get',
    url: '/api/otters/profile',
    success: function(data){
      var id = data.Otter._id;
      var name = data.Otter.name;
      $img = data.Otter.img;
      $name = data.Otter.name;
      makeDiv(id,name,$img);
      }
    })
  }
  function   makeDiv(id,name,img){
    $('#hello').attr('id', id).text(name) ;
  }

function setChatFormHandler(){
  $('form#chat-generator').on('submit', function(e){
    e.preventDefault();
    var usernameText = $(this).find('input[name="username"]');
    usernameText=usernameText.val($name);
    var messageField = $(this).find('input[name="message"]');
    var messageText = messageField.val();
    messageField.val('');
    var data = {username: usernameText, message: messageText};
    socket.emit('user message to server', data);
  });
}

function renderMessage(img, username, message){
  $el = $('<li>');
  $el.append( $('<img>').attr('src', img).css({'float':'left', 'width': '40px'}) );
  $el.append( $('<h3>').text(username) );
  $el.append( $('<p>').text(message) );
  return $el;
}

function setMessageListeningHandler(){
  socket.on('glabally sent message', function(data){
  var $message = renderMessage($img, $name, data.message);
  $('ul#chats-display').prepend($message);
});
}

$(function(){
  GetName();
  setChatFormHandler();
  setMessageListeningHandler();

})
