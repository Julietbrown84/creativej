$(document).ready(function() {
  $('button').click(function() {
      var toAdd = $("input[name=message]").val();
      $('#messages').append("<p>" + toAdd+ "</p>");
    });
  });

    $('button').click(function() {
      $('div').fadeOut('slow')
    });
    $('div').click(function() {
      $(this).fadeOut('slow')
    });
    $('.red, .pink').fadeTo('slow', 0)
});
