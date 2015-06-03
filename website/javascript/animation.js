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

    $('nav').hover(
        function(){
            $(this).addClass('active');
        },
        function(){
            $(this).removeClass('active')
        }
      );
});


$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
            // Left arrow key pressed
            case 37:
                $('img').animate({left: "-=10px"}, 'fast');
                break;
            // Up Arrow Pressed
            case 38:
                $('img').animate({top: "-=10px"}, 'fast');
                break;
            // Right Arrow Pressed
            case 39:
                $('img').animate({left: "+=10px"}, 'fast');
                break;
            // Down Array Pressed
            case 40:
                $('img').animate({top: "+=10px"}, 'fast');
                break;
        }
    });
});
