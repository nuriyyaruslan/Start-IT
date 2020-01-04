$(document).ready(function(){

  $('.carousel-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<a class="oval oval-left" href="#" role="button"><span class="icon-custom icon-slide-left flaticon-arrows-4"></span></a>',
    nextArrow: '<a class="oval oval-right" href="#" role="button"><span class="icon-custom icon-slide-right flaticon-arrows-3"></span></a>',
    arrows: true,
    responsive:[
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        dots: true
      }
    }
    ]
  });

  // card slide top
  $('.special').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    nextArrow: $('.list-course-icon-arrow-special'),
    prevArrow: false,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    ]
  });

  // card slide bot
  $('.feature').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<a class="oval oval-left" href="#" role="button"><span class="icon-custom icon-slide-left flaticon-arrows-4"></span></a>',
    nextArrow: '<a class="oval oval-right" href="#" role="button"><span class="icon-custom icon-slide-right flaticon-arrows-3"></span></a>',
    arrows: true,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    }
    ]
  });


});
