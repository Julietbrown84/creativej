$(document).ready(function() {
    $('button').click(function() {
      $('div').fadeOut('slow')
    });
    $('div').click(function() {
      $(this).fadeOut('slow')
    });
    $('.red, .pink').fadeTo('slow', 0)
});
