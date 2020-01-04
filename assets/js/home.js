"use strict";
new WOW().init();

$(document).ready(function(){
  $(".list-icons__item").on({
    mouseenter: function () {
        //stuff to do on mouse enter
      $('.list-icons__item').not($(this)).addClass('active-item');//cho các .list-icons__item mờ đi (opacity: 0.3)
    },
    mouseleave: function () {
        //stuff to do on mouse leave
      $('.list-icons__item').not($(this)).removeClass('active-item');//cho các .list-icons__item mờ đi (opacity: 0.3)

    }
  });

  (function() {
    $(function() {
      $('.blog-col__item').matchHeight({
        property: 'height',
      });
      $('.design-sprint__contents').matchHeight({
        property: 'height',
      });
      $('.pro-item').matchHeight({
        property: 'height',
      });
    });
  })();
});
