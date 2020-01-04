"use strict";
new WOW().init();

$(document).ready(function(){
	// play/pause video banner
	var video = document.getElementById('video-banner');
	var btn = document.getElementById('btn-play-banner');
	var iconVideo = document.querySelector('#btn-play-banner .icon-play');
	var banner = document.querySelector('.banner');

	btn.addEventListener('click',function(){
		if(video.paused){
			banner.classList.add('played');
			video.style.opacity = '1';
			video.style.visibility = 'visible';
			video.play();
			iconVideo.className = 'icon-play icon-custom flaticon-music';
		}else{
			video.pause();
			iconVideo.className = 'icon-play icon-custom flaticon-arrows-6'; 
		}
	});

});