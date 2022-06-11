$(document).ready(function(){

    if($(window).width() >= 768){

        $('.other-services-item').matchHeight({
          byRow: true
        });

        $('.scheme-item p').matchHeight({
          byRow: true
        });

    }

    jcf.replaceAll();

    $('.advantages-slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: '<button class="slick-arrow next"><span></span></button>',
      prevArrow: '<button class="slick-arrow prev"><span></span></button>',
      responsive: [
          {
            breakpoint: 1240,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              nextArrow: '<button class="slick-arrow next"><span></span></button>',
              prevArrow: '<button class="slick-arrow prev"><span></span></button>',
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              nextArrow: '<button class="slick-arrow next"><span></span></button>',
              prevArrow: '<button class="slick-arrow prev"><span></span></button>',
            }
          },
          {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: '<button class="slick-arrow next"><span></span></button>',
                prevArrow: '<button class="slick-arrow prev"><span></span></button>',
              }
          }
      ]
    });

    $('.our-work-slider').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: '<button class="slick-arrow next"><span></span></button>',
      prevArrow: '<button class="slick-arrow prev"><span></span></button>',
    });



  $('.advantages-work .slick-slide .icon').matchHeight({
    byRow: false
  });

  $('.advantages-work .slick-slide h3').matchHeight({
    byRow: false
  });

  $('.advantages-work .slick-slide p').matchHeight({
    byRow: false
  });

  $('.scheme-item p').matchHeight({
    byRow: false
  });
    $('.phone').mask('+7 (000) 000 00 00', {placeholder: "+7 900 --- -- --"});

  $('.slider-nav li').on('click', function(){
    $(this).parent().find('.active').removeClass('active');
    $(this).addClass('active');
    var sliderNav = $(this).data('our');
    $('.slick-current .our-work-item').removeClass('active');
    $('.' + sliderNav).addClass('active');
  });

  $('header .order').on('click', function(){
    $('.callback').addClass('active');
  });

  $('.repair-click').on('click', function(){
    $('.repair').addClass('active');
  });

  $('.close-popup').on('click', function(){
    $('.callback').removeClass('active');
    $('.repair').removeClass('active');
    $('.thank').removeClass('active');
    $('.popup-img').removeClass('active');
  });

  $('.close').on('click', function(){
    $('.callback').removeClass('active');
    $('.repair').removeClass('active');
    $('.thank').removeClass('active');
  });

  $('.nav-item').on('click', function(){
    $(this).siblings('.nav-item').removeClass('active');
    $(this).addClass('active');
    var navImg = $(this).data('img');
    $(this).parents('.img-nav').prev('.img-for').find('img').attr('src', navImg);
  });

  $('.img-for').on('click', function(){
    $('.popup-img').addClass('active');
    $('.popup-img').find('img').attr('src', $(this).find('img').attr('src'));
  });

  $('.our-work-item article').readmore({
    speed: 275,
    collapsedHeight: 190,
    moreLink: '<a href="#">Читать полностью</a>',
    lessLink: '<a href="#">Свернуть</a>'
  });



});


