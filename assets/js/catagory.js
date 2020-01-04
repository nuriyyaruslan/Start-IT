"use strict";
$(document).ready(function(){
  var window_width = $(window).width(),
      $textSelect  = $('#select-text'),
      $listCatagories = $('.list-catagories__list'),
      $linkCatagoties = $listCatagories.find('a');

  $listCatagories.on('click', 'a', function() {
    var text = $(this).text();
    $linkCatagoties.removeClass('active');
    $(this).addClass('active');
    $textSelect.html(text);
    if (window_width <= 768) {
      $('#btn-list-catagories').trigger('click');
    }
  })
})
