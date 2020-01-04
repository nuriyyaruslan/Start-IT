"use strict";
(function() {
  $(function() {
    // - Match height of .review-course__item
    $('.review-course__item').matchHeight({
      property: 'height'
    });
  });

  $('#button-vieo-bd').on('click', function(){
    if ($("#video-bundle-detail")[0].paused){
      $(this).removeClass('flaticon-arrows');
      $(this).addClass('flaticon-pause-button');
      $('.review-course__item-right__content').addClass('hide-bg-video');
      $("#video-bundle-detail")[0].play();
    }
  });



  $('#video-bundle-detail').on('click', function() {
    $("#video-bundle-detail")[0].pause();
    $(this).addClass('flaticon-arrows');
    $(this).removeClass('flaticon-pause-button');
    $('.review-course__item-right__content').removeClass('hide-bg-video');
  })



  $('.brief-course__buton__icon').on('click', function() {
    $(this).closest('.brief-course__item').toggleClass('brief-course__item--hide');
  });

  $('.hide-bundle-item').on('click', function() {
    $(this).closest('.brief-course__item').hide('slow');
  });

})();
