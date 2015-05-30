$(window).ready(function() {
        $("h1").animate({top: '500px',right: '300px'});
       });


var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });
};
   function fallingSnow() {
    
        var snowflake = $('<div class="snowflakes"></div>');
        $('#snowZone').prepend(snowflake);
        snowX = Math.floor(Math.random() * $('#site').width());
        snowSpd = Math.floor(Math.random() + 5000);

        snowflake.css({'left':snowX+'px'});
        snowflake.animate({
            top: "500px",
            opacity : "0",

        }, snowSpd, function(){
            $(this).remove();
            fallingSnow();
        });

    }
    var timer = Math.floor(Math.random() +1000);
    
    window.setInterval(function(){
        fallingSnow();
    }, timer);
$(document).ready(main);