var pageChapInfos = $('.infos_container');
var pageChapRecap = $('.chap_recap');
var arrows        = $('.arrow')
var bg            = $('.top');
var chap_btns     = $('.chap');
var activeChap    = $('.active');
var top           = bg.attr('class').split(' ')[2];

chap_btns.on('click', function() {
   var pageNum = $(this).text();
   changePage($(this), pageNum);
});

function changePage(clickedChap, index) {
   pageChapInfos.fadeOut(function() {
      $.ajax({
         url: index + '.html',
         success: function(response) {
            var htmlChapInfos = $(response); //full page
            var barba_container = htmlChapInfos.filter('.barba-container');
            var newTop          = htmlChapInfos.find('.top');
            var newTopClass     = newTop.attr('class').split(' ')[2];
            var html_container = htmlChapInfos.find('.infos_container'); // container block
            var html_chap_recap = htmlChapInfos.find('.chap_recap'); //chap infos barre


            pageChapInfos.html(html_container);
            pageChapRecap.html(html_chap_recap);
            //chaps
            chap_btns.each(function() {
               $(this).removeClass('active');
            });
            clickedChap.addClass('active');

            //bg

            bg.removeClass();
            bg.addClass('commencement_container' + ' top' + ' top' + index);
            // top = bg.attr('class').split(' ')[2];
            pageChapInfos.fadeIn('slow');
         },
      });
   });
}
