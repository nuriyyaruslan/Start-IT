"use strict";
$(document).ready(function(){

	$('.carousel-slide').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<a class="arrow arrow--left" href="#" role="button"><span class="icon-custom icon-slide flaticon-left-arrow"></span></a>',
    nextArrow: '<a class="arrow arrow--right" href="#" role="button"><span class="icon-custom icon-slide flaticon-right-arrow"></span></a>',
    responsive:[
    {
      breakpoint: 769,
      settings: {
        dots: true,
        arrows: false,
      }
    }
    ]
  });

  // Play-paused Video
  var video = document.getElementById('video');
  var btnPlay = document.querySelector('.btn-play');
  var iconPlayPause = document.querySelector('.btn-play span');

  btnPlay.addEventListener('click',function(){
    if (video.paused){
      iconPlayPause.className = "icon-custom icon-video-banner flaticon-music";
      video.style.opacity = "1";
      video.play();
    }
    else{
      iconPlayPause.className = "icon-custom icon-video-banner flaticon-arrows-6";
      video.style.opacity = "0.8";
      video.pause();
    }
  });

  //Tab-pane
});