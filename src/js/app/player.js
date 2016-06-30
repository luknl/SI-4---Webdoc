/*  ----  Var & listeners  ---- */

var player = {};
player.container = document.querySelector('.player');
player.video = player.container.querySelector('video');
player.bar = player.container.querySelector('.bar');
player.seek_bar = player.container.querySelector('.seek-bar');
player.progress_bar = player.seek_bar.querySelector('.progress-bar');
player.progress_button = player.seek_bar.querySelector('.progress-button');
player.playPause = player.container.querySelector('.play-pause');
player.play = document.querySelector('.playy');
player.mute = player.container.querySelector('.volume-button');
player.volumeslider = player.container.querySelector('.volumeslider');
player.fullscreen = false;
player.fullscreen_button = player.container.querySelector('.fullscreenbutton');

/*  ----  Controls  ---- */

player.video.controls = false;
player.video.autoplay = false;
player.video.volume = 1;


/*  ----  Progress Bar  ---- */

window.setInterval(function () {

    var progress_ratio = player.video.currentTime / player.video.duration;
    player.progress_bar.style.webkitTransform = 'scaleX(' + progress_ratio + ')';
    player.progress_bar.style.mozTransform = 'scaleX(' + progress_ratio + ')';
    player.progress_bar.style.oTransform = 'scaleX(' + progress_ratio + ')';
    player.progress_bar.style.transform = 'scaleX(' + progress_ratio + ')';

    // Timing progress (currentTime / video.duration)
    var current_time                     = player.video.currentTime.toFixed(0);    
    var minutes_current = Math.floor(current_time / 60);    
    var seconds_current =   current_time % 60  ;  
    if   (seconds_current < 10) {        
        seconds_current = '0' + seconds_current;    
    }

    var video_duration                     = player.video.duration.toFixed(0);    
    var minutes_duration = Math.floor(video_duration / 60);    
    var seconds_duration =   video_duration % 60  ;  
    if   (seconds_duration < 10) {        
        seconds_duration = '0' + seconds_duration;    
    }

    //Display Time
    player.container.querySelector('.time').innerHTML = minutes_current + ':' + seconds_current + " / " + minutes_duration + ':' + seconds_duration;
}, 40);



/*  ---- Naviguation in the video with Seek Bar click ---- */

player.seek_bar.addEventListener('click', function (e) {
    var bounding_rect = player.seek_bar.getBoundingClientRect(),
        x = e.clientX - bounding_rect.left;
    ratio = x / bounding_rect.width;
    time = ratio * player.video.duration;

    player.video.currentTime = time;
});


/*  ----  Change player interface during play or pause  ---- */

// On video play
player.video.addEventListener('play', function () {
    document.querySelector('.play-pause').classList.add('paused');
    document.querySelector('.play-pause').classList.remove('playing');
    document.querySelector('.play-pause').classList.remove('restart');
});

// On video pause
player.video.addEventListener('pause', function () {
    document.querySelector('.play-pause').classList.remove('paused');
    document.querySelector('.play-pause').classList.add('playing');
});

// On video end
player.video.addEventListener('ended', restart, false);

function restart(e) {
    document.querySelector('.play-pause').classList.remove('playing');
    document.querySelector('.play-pause').classList.add('restart');
}


/*  ----  Play/Pause on click  ---- */

player.video.addEventListener('click', function () {
    if (player.video.paused)
        player.video.play();
    else
        player.video.pause();
});


/*  ----  Play/Pause on button play/pause click  ---- */

player.playPause.addEventListener('click', function () {
    if (player.video.paused)
        player.video.play();
    else
        player.video.pause();
});

player.play.addEventListener('click', function () {
        player.video.play();
        player.play.style.display = 'none';
});


/*  ----  Sound & Mute Controls  ---- */

function Mute() {
    if (player.video.muted) {
        player.video.muted = false;
        document.querySelector('.volume-button').classList.add('sound');
        document.querySelector('.volume-button').classList.remove('mute');
    } else {
        player.video.muted = true;
        document.querySelector('.volume-button').classList.remove('sound');
        document.querySelector('.volume-button').classList.add('mute');
    }
}


player.mute.addEventListener('click', function () {
    Mute();
});


/*  ----  Volume slider  ---- */

player.volumeslider.addEventListener('input', function () {
    var volume_slide = (player.volumeslider.value / 100);
    player.video.volume = volume_slide;
});



/*  ----  Volume slider displaying on volume-button  ---- */

player.mute.addEventListener('mouseover', function () {
    document.querySelector('.volumeslider').classList.add('mutehover-in');
    document.querySelector('.time').classList.add('time-move-left');
    document.querySelector('.volumeslider').classList.remove('mutehover-out');
    document.querySelector('.time').classList.remove('time-move-right');
});


player.bar.addEventListener('mouseleave', function () {
    document.querySelector('.volumeslider').classList.remove('mutehover-in');
    document.querySelector('.time').classList.remove('time-move-left');
    document.querySelector('.volumeslider').classList.add('mutehover-out');
    document.querySelector('.time').classList.add('time-move-right');
});



/*  ----  Keyboard actions ---- */

window.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
    var keyCode = e.keyCode;

    // Space & J : Play/Pause
    if (keyCode == 32 || keyCode == 74) {

        if (player.video.paused)
            player.video.play();
        else
            player.video.pause();
    }

    // L : Forward 5 seconds
    else if (keyCode == 75)
        player.video.currentTime += 5;

    // K : Forward 20 seconds
    else if (keyCode == 76)
        player.video.currentTime += 20;

    // H and left : Backwards 5 seconds
    else if (keyCode == 72)
        player.video.currentTime -= 5;

    // F and Esc : Toogle Fullscreen
    else if (keyCode == 70 || keyCode == 27)
        Fullscreen();

    // M : Mute
    else if (keyCode == 77)
        Mute();

    // Right Arrow : Speed * 2
    else if (keyCode == 39) {
        if (player.video.playbackRate == 2)
            player.video.playbackRate = 1;
        else
            player.video.playbackRate = 2;
    }

    // Left Arrow : Speed * 0.5
    else if (keyCode == 37) {
        if (player.video.playbackRate == 0.5)
            player.video.playbackRate = 1;
        else
            player.video.playbackRate = 0.5;
    }

    // Up Arrow: Volume UP
    else if (keyCode == 38) {
        var volume = player.video.volume + 0.1;
        //    player.volumeslider.value+=10;
        if (volume > 1)
            volume = 1;
        player.video.volume = volume;
    }

    // Down Arrow : Volume DOWN
    else if (keyCode == 40) {
        var volume = player.video.volume - 0.1;
        if (volume < 0)
            volume = 0;
        player.video.volume = volume;
    }
}


/*  ---------------- Fullscreen ------------------------ */


function Fullscreen() {
    if (player.fullscreen === false) {
        player.fullscreen = true;

        // Change fullscreen button
        document.querySelector('.fullscreenbutton').classList.remove('fullscreen_enter');
        document.querySelector('.fullscreenbutton').classList.add('fullscreen_exit');

        // Ask fullscreen
        if (player.container.requestFullscreen) {
            player.container.requestFullscreen();
        } else if (player.container.mozRequestFullScreen) {
            player.container.mozRequestFullScreen();
        } else if (player.container.webkitRequestFullscreen) {
            player.container.webkitRequestFullscreen();
        }
    } else {
        player.fullscreen = false;


        // Change fullscreen button
        document.querySelector('.fullscreenbutton').classList.remove('fullscreen_exit');
        document.querySelector('.fullscreenbutton').classList.add('fullscreen_enter');
        // Exit fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}

// Fullscreen on "fullscreenbutton" click
player.fullscreen_button.addEventListener('click', function () {
    Fullscreen();
});

// Fullscreen on Double click
player.video.addEventListener('dblclick', function () {
    Fullscreen();
});



/* -------   Displaying control bar on mouseover/mouseout  ----  */

player.container.addEventListener("mouseover", bar_fade_out, false);

function bar_fade_out() {
    document.querySelector('.bar').classList.add('bar_fade_out');
    document.querySelector('.bar').classList.remove('bar_fade_in');
}


player.container.addEventListener("mouseout", bar_fade_in, false);

function bar_fade_in() {
    document.querySelector('.bar').classList.add('bar_fade_in');
}


// document.querySelector('.sidebtn').addEventListener('click', function() {
//    document.querySelector('.sidebar').style.transform = 'translateX(-300px)';
// });

$('.sidebtn').on('click', function() {
      if ($('.sidebar').hasClass('show')) {
           $('.sidebar').removeClass('show');
      } else {
           $('.sidebar').addClass('show');
      }
   });
