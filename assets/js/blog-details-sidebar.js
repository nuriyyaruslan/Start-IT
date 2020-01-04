"use strict";
function smartTrim(str, length, delim, appendix) {
  if (str.length <= length) return str;

  var trimmedStr = str.substr(0, length+delim.length);

  var lastDelimIndex = trimmedStr.lastIndexOf(delim);
  if (lastDelimIndex >= 0) trimmedStr = trimmedStr.substr(0, lastDelimIndex);

  if (trimmedStr) trimmedStr += appendix;
  return trimmedStr;
}

function checkWindownSize() {
  var text = $('#text-js').html();
  var link_view_more = '<a class="column-left__link" href="#">view more</a>';
  var window_width = $(window).width();

  if(window_width < 1199) {
    $('#text-js').html(smartTrim(text, 240, ' ', ' ... ' + link_view_more));
  } else {
    $('#text-js').html(smartTrim(text, 430, ' ', ' ... ' + link_view_more));
  }
}

$(document).ready(function(){

  $(window).on('resize load', function() {
    checkWindownSize();
  });
});
