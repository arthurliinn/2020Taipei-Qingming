$(document).ready(function(){
    $('#boards_container').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      slickPlay: true,
      infinite: true,
      responsive:[
        {
          breakpoint: 1080,
          settings:{
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 481,
          settings:{
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 8000,
          }
        },
      ]
    });
});