$(document).ready(function() {
   $('.landing-img').on('click', function() {
            $('.landing-video').fadeIn('slow')
            $(".landing-video").get(0).play();
            $(".landing-first").fadeOut('fast')
            window.setTimeout(function(){
               $(".intro").css("display", "block");
               $(".skip").css("display", "none");
            }, 27000);
            window.setTimeout(function(){
               $(".skip").css("display", "block");
            }, 1000);
       });
});
