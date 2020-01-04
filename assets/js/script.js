
var x = 0;
var anchor_offset = $("#scrollspy").offset().top,//menu nav header cách top.
height_menu = $('#scrollspy').height();//menu nav header.

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      $("#on-top").addClass('btn-ontop--show');
  } else {
      $("#on-top").removeClass('btn-ontop--show');
  }
}

function clickOnTop() {
  $('#on-top').on('click', function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  })
}

// function Check size of windown
// =============================

function checkSize() {
  var window_width = $(window).width();
  if (window_width <= 992) {
    anchor_offset = $('.header-top').height();
    height_menu = 0;

    $('#scrollspy').removeAttr('data-spy data-offset-top');
    // header-top desktop.
    $('#header-top').attr({
      'data-spy': "affix",
      'data-offset-top': "0"
    })

  } else {
    $('a.menu-main__link').removeAttr('data-toggle', 'data-target');

    $('#header-top').removeAttr('data-sp data-offset-top');

    // clickScroll('#scrollspy','#scrollspy',x);

  }
}
// function click link of menu main (smootscroll)
// =============================

function clickScroll(menu, element) {
  $(menu + " ul li a[href^='#']").on("click", function (e) {
    e.preventDefault();
    var navOffset = $(element).height();
    var anchor = $(this).attr('href');
    // smoothscroll effect
    $('html, body').animate({
      scrollTop: $(anchor).offset().top - navOffset + x,
    },1000);
    // add active
    $(menu + " ul li").removeClass('active');
    $(this).parent('li').addClass('active');
  });
}

// funtion scroll and add class active for menu main
// =============================

// function onScroll(e) {
//   var cur_pos = $(document).scrollTop(),
//   links = $("#scrollspy ul li a[href^='#']")
//   links.each(function() {
//     var cur_link = $(this),
//     cur_secsion = $(cur_link.attr('href')),
//     pos_secstion = cur_secsion.position().top,
//     height_secsion = cur_secsion.height(),
//     height_menu = $("#scrollspy").height;
//     if(pos_secstion - height_menu <= cur_pos && (pos_secstion + height_secsion) > cur_pos) {
//       $('#scrollspy ul li').removeClass("active");
//       cur_link.addClass("active");
//     }
//     else{
//       cur_link.removeClass("active");
//     }
//   })
// }

// set active for page
// ============================
function active_page() {
  var $page_active = localStorage.page_active,
      $page_actived = $('li.menu-main__item a.menu-main__link');

  $('.menu-main__item').removeClass('active');

  $page_actived.each(function() {
    if ($(this).attr('id') === $page_active) {
      $(this).parent().addClass('active');
    }
  })
}

// Check value localstorage

function checkPageActive() {
  if (localStorage.page_active === undefined) {
    localStorage.page_active = 'home';
    active_page();
  } else {
    active_page();
  }
}


// Ready functions
// =============================

$(document).ready(function(){
  checkPageActive();

  // save value link in localStorage
  $('.menu-main').on('click', '.dropdown-catagories__item ', function(e) {
    var $item_active = $(e.target).closest('li.menu-main__item'),
        $link_active = $item_active.find('.menu-main__link'),
        value = $link_active.attr('id');
    localStorage.page_active = value;
  })

  $('.logo__link').on('click', function() {
    localStorage.page_active = 'home';
  })

  // click vào mũi tên arrow > ở submenu cấp cuối cùng
  $('.dropdown-submenu span').on("click", function(e){
    e.preventDefault();
    e.stopPropagation();
    $(this).next('ul').toggle();//đóng mở menu.
    $(this).toggleClass('icon-rotate');// hiệu ứng xoay mũi tên.
  });

  $('body').on('click', function(e) {
    // khi click vào body mà phần element bị click đó trùng với #menu-hamberger (button phải).
    if ($('#menu-hamberger').has(e.target).length === 0 && !$('#menu-hamberger').is(e.target) && $('.menu-mobile ').has(e.target).length === 0 && !$('.menu-mobile ').is(e.target)) {
      //nếu menu mobile bên phải đã open.
      if($('#header-mobile .menu-mobile').hasClass('open')) {
        $('#header-mobile .menu-mobile').toggleClass('open');// open/close menu mobile bên phải.
        $('#menu-hamberger .bar').toggleClass('animate');// thêm/xóa class .animate để tạo hiệu ứng dấu X.
        $('body').removeClass('over-flow-body');// xóa class .over-flow-body(overflow: hidden)
      }
    }
    // khi click vào body mà phần element bị click đó trùng với .categories--mobile (button trái).
    if ($('.categories--mobile').has(e.target).length === 0 && !$('.categories--mobile').is(e.target) && $('.menu-mobile--categories ').has(e.target).length === 0 && !$('.menu-mobile--categories ').is(e.target)) {
      //nếu menu mobile bên trái đã open.
      if( $('.menu-mobile--categories').hasClass('open')) {
        $('.menu-mobile--categories').removeClass('open');// open/close menu mobile bên trái.
        $('body').removeClass('over-flow-body');// xóa class .over-flow-body(overflow: hidden)
      }
    }
  });

  // play/pause video ở footer.
  $(function(){
    $(".icon-video").on('click', function(){
      if ($("#video-background")[0].paused){
        $(".icon-video").html('<span class="glyph-icon flaticon-music icon-custom icon-video__icon"> </span>')
        $("#video-background")[0].play();
      }
      else{
        $("#video-background")[0].pause();
        $(".icon-video").html('<span class="glyph-icon flaticon-arrows-6 icon-custom icon-video__icon"> </span>')
      }
    })
  })

  // Menu mobile
  $('#menu-hamberger').on('click',function(e){
    e.preventDefault();
    var $menu_categories = $('.menu-mobile--categories');// menu mobile bên trái.
    $('#header-mobile .menu-mobile').toggleClass('open');// đóng mở menu mobile bên phải.
    $('#menu-hamberger .bar').toggleClass('animate');// thêm/xóa class .animate để tạo hiệu ứng dấu X.
    //.over-flow-body(overflow: hidden)
    if($('body').hasClass('over-flow-body')) {
      $('body').removeClass('over-flow-body');
    }
    else {
      $('body').addClass('over-flow-body');
    }
    //$('body').addClass('over-flow-body');
    //nếu menu mobile bên trái đã mở mà click mở menu bên phải thì
    if( $menu_categories.hasClass('open')) {
      $menu_categories.removeClass('open');//đóng menu mebile bên trái.
      $('body').addClass('over-flow-body');
    }
  });
  // Categories Mobile
  //tương tự ở trên
  $('.categories--mobile').on('click',function(e){
    e.preventDefault();
    var $menu_mobile = $('#header-mobile .menu-mobile'),
        $menu_hamberger = $('#menu-hamberger .bar');
    $('.menu-mobile--categories').toggleClass('open');
    if($('body').hasClass('over-flow-body')) {
      $('body').removeClass('over-flow-body');
    }
    else {
      $('body').addClass('over-flow-body');
    }
    if($menu_mobile.hasClass('open') && $menu_hamberger.hasClass('animate') ) {
      $menu_mobile.removeClass('open');
      $menu_hamberger.removeClass('animate');
      $('body').addClass('over-flow-body');
    }
  });

  // đóng form search ở màn hình mobile.
  $('.form-search__button--close').on('click', function(e) {
    $('#form-search-mobile').collapse('hide');
  });

  // Add active signin button
  // ============================
  $('.nav-right__signin__link').on('click', function(e) {
    $content_active = $(this).attr('data-modal-target');
    $item_active = $('a[href$="' + $content_active + '"]');
    $('.signin-form__tabs__items').removeClass('active');
    $item_active.parent().addClass('active');
    $('.tab-pane.fade').removeClass('active in');
    $($content_active).addClass('active in')
  });

  checkSize();

  clickOnTop();

  $(window).scroll(function() {
    var scroll = $(window).scrollTop(),
    menu_main = $('.menu-main'),
    width_window = $(window).width();

    //scroll in desktop and offset top > 116
    if ((width_window > 991) && (scroll >= 116)) {
      menu_main.addClass('fix-header');// float right menu-main
      $('.logo--menu').addClass('logo--menu--active');// appearance logo

    } else {
      menu_main.removeClass('fix-header');
      $('.logo--menu').removeClass('logo--menu--active');
    }
    ( $(window).scrollTop() < anchor_offset ) ? x = -height_menu : x = 0;

    scrollFunction();
  });

  $(window).on('resize load', function() {
    checkSize();
  });


   /* google map start */
 if($('#map').length>0){
  function initMap (getId) {
 if(document.getElementById(getId)) {
     let lat = parseFloat(document.getElementById(getId).getAttribute("lat"));
     let lng = parseFloat(document.getElementById(getId).getAttribute("lng"));

     var location = { lat,  lng }
     map = new google.maps.Map(document.getElementById(getId), {
         zoom: 4,
         styles: 
        [{"featureType":"all","elementType":"all","stylers":[{"color":"#30d667"},{"visibility":"simplified"},{"weight":"1"}]},{"featureType":"all","elementType":"geometry.fill","stylers":[{"color":"#f3f6fb"},{"weight":"1.00"},{"visibility":"simplified"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#d2dcf0"},{"visibility":"simplified"},{"lightness":"0"},{"gamma":"1.00"},{"weight":"10.00"}]},{"featureType":"all","elementType":"labels","stylers":[{"color":"#819cd5"},{"visibility":"simplified"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"visibility":"on"},{"weight":"10.00"}]},{"featureType":"landscape","elementType":"geometry.stroke","stylers":[{"color":"#30d667"},{"weight":"10.00"},{"gamma":"1.00"},{"lightness":"-16"},{"saturation":"0"}]},{"featureType":"poi","elementType":"all","stylers":[{"color":"#7b97d3"},{"visibility":"simplified"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#7b97d3"},{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"weight":"10.00"}]},{"featureType":"poi","elementType":"geometry.stroke","stylers":[{"weight":"6.25"}]},{"featureType":"road","elementType":"all","stylers":[{"color":"#30d667"},{"visibility":"simplified"},{"saturation":"0"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#30d667"},{"weight":"8.00"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#30d667"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"color":"#30d667"},{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#7b97d3"},{"visibility":"simplified"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"geometry.fill","stylers":[{"color":"#30d667"}]},{"featureType":"transit","elementType":"geometry.stroke","stylers":[{"color":"#30d667"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"},{"weight":"1"}]},{"featureType":"transit.line","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#30d667"}]},{"featureType":"transit.station.airport","elementType":"geometry","stylers":[{"color":"#30d667"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#30d667"}]},{"featureType":"water","elementType":"labels","stylers":[{"color":"#30d667"},{"visibility":"simplified"}]}],
         center:location,
         mapTypeId: google.maps.MapTypeId.ROADMAP
     });
     marker = new google.maps.Marker({
         map:map,
         position:location,
         animation: google.maps.Animation.DROP,
     });
     marker.addListener('click', toggleBounce);
 }
}
function toggleBounce() {
 if (marker.getAnimation() !== null) {
 marker.setAnimation(null);
 } else {
 marker.setAnimation(google.maps.Animation.BOUNCE);
 }
}
initMap("map");
google.maps.event.addDomListener(window, "load", initMap);
}
/* google map end */

$('.custom_slider_wrapper .carousel').slick({
  slidesToShow: 1,
  dots:true,
  speed:1500,
  easing:'linear',
  infinite:true
});


  

});

