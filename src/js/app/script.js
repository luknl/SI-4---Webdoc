$(document).ready(function() {
   $('.landing-img').on('click', function() {
            $(".landing-video").css("display", "block");
            $(".landing-video").get(0).play();
            $(".landing-img").css("display", "none");
            window.setTimeout(function(){
               $(".intro").css("display", "block");
            }, 27000);
       });
});
