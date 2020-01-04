"use strict";
$(document).ready(function(){
	// stopPropagination for GO HOME button
	$('.btn-green').on('click',function(event){
		event.stopPropagation();
	});
});