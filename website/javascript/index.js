

$(window).ready(function() {
        $("h1").animate({top: '300px',right: '300px'});
       });

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