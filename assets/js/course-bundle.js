"use strict";
function checkWindownSize() {
  var window_width = $(window).width();

  if (window_width <= 993) {
    clickScroll('#menu-left', '#header-mobile', x);
    $('#menu-left').unstick();
  }
  else {
    clickScroll('#menu-left','#scrollspy', x);
  }
}

$(document).ready(function(){
  $('#menu-left').sticky({topSpacing:70, bottomSpacing: 603});

  $('.course-detail__view-more').on('click', function(e) {
    var item = $(this).attr('data-item'),
        detail_item = $('#course-detail-' + item),
        paragraph_item = $('#paragraph-' + item);

    e.preventDefault();

    detail_item.removeClass('course-detail--hide');
    paragraph_item.removeClass('paragrap-content--hide');
    $(this).addClass('hiden');

  })

  $('#cs-button-view').on('click', function() {
    $('.list-syllabus').toggleClass('list-syllabus--show');
    $(this).text(function(i, text){
      return text === "view less" ? "view more" : "view less";
    })
  });

  $(window).on('resize load', function() {
    checkWindownSize();
  });
});
