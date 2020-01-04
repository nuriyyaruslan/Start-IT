"use strict";
$(document).ready(function(){
	var countDownDate = new Date("December 9, 2020 23:23:50").getTime();
	var x = setInterval(function(){
		var now = new Date().getTime();
		var  distance = countDownDate - now;

		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    	$('#day').text(days);
        $('#hour').text(hours);
        $('#minute').text(minutes);
        $('#second').text(seconds);

    	if (distance < 0) {
        	clearInterval(x);
        	$('.coming-soon-countdown').html('<div class="main-count-wrapper"><div class="main-count"><span class="count">EXPIRED</span></div></div>');
    	}

	},1000);

});