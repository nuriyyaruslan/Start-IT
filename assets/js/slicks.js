$(document).ready(function(){
  $('.special').slick({
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: $('.list-course-icon-arrow-special'),
    prevArrow: false,
    responsive: [
      {
        breakpoint: 1025,
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
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.rated-cou').slick({
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,
    autoplay: true,
    nextArrow: $('.list-course-icon-arrow-course-rate'),
    prevArrow: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false
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

  $('.testimotials__list').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,
    variableWidth: false,
    speed: 300,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false,
        }
      }
    ]
  });

  $('.list-icons__list').slick({
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    speed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 300,
          speed: 1500,
          cssEase: 'linear',
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 300,
          speed: 1500,
          cssEase: 'linear',
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 300,
          speed: 1500,
          cssEase: 'linear',
        }
      }
    ]
  });

  $('.blog').slick({
    // centerMode: true,
    // centerPadding: '0px',
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    dots: true,

    // variableWidth: true,
    nextArrow: $('.list-course-icon-arrow-recent-blog'),
    speed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          centerMode: true,
          dots: false,
          variableWidth: false,
          centerPadding: '0px',
          slidesToShow: 2,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 993,
        settings: {
          arrows: false,
          centerMode: true,
          dots: false,
          variableWidth: false,
          centerPadding: '0px',
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      }
    ]
  });


});
