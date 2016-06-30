$(document).ready(function() {

if(($( window ).width()) < 730){
   $('.landing-img').on('click', function() {
            window.setTimeout(function(){
               $(".intro").css("display", "block");
               $(".landing-img").css("display", "none");
            },0);
       });
}
else{
   $('.landing-img').on('click', function() {
            $('.landing-video').fadeIn('slow')
            $(".landing-video").get(0).play();
            $("#intro").get(0).pause();
            $(".landing-first").fadeOut('fast')

            window.setTimeout(function(){
               $(".intro").css("display", "block");
               $(".skip").css("display", "none");
            }, 27000);
            window.setTimeout(function(){
               $(".skip").css("display", "block");
            }, 1000);
       });
    }
});
