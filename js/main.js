$(document).ready(function(){
    $('.slick').slick({
        mobileFirst: true,
        prevArrow: false,
        // nextArrow: '<img src="../img/next.png"/>',
        variableWidth: true,
        responsive: [
            {
                breakpoint: 500, 
                settings: {
                    slidesToShow: 1.5,
                },
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1.5,
                },
                breakpoint: 900, 
                settings: {
                    slidesToShow: 2.1,
                },
                breakpoint: 1200, 
                settings: {
                    slidesToShow: 2.5,
                },
                breakpoint: 1500, 
                settings: {
                    slidesToShow: 3.1,
                },
                breakpoint: 1920, 
                settings: {
                    slidesToShow: 3.1,
                },
            }
        ]
    });
  });