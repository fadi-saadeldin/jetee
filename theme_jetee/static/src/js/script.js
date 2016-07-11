

$(document).ready(function ($) {
  "use strict";

        $('#owl-stage-slider').owlCarousel({
          autoPlay: 3000, //Set AutoPlay to 3 seconds
          stagePadding: 200,
          loop: true,
          nav: true,
          slideSpeed: 300,
          items: 1,
          margin: 4,
          responsive: true
        });
        
       
         $('#owl-stage-slider').on('translate.owl.carousel', function (e) {
        var idx = e.item.index;
        $('.owl-item.main-image').removeClass('main-image');

        $('.owl-item').eq(idx).addClass('main-image');
        $('.owl-item').eq(idx - 1).addClass('cloned');
        $('.owl-item').eq(idx + 1).addClass('cloned');

      });
          var w_width = $(window).width();
                var c_width = (w_width) + 'px';
              
                $('.owl-slider').css({'width': c_width});
  

  
  
    /*--------------------------------------------------*/
    /* Counter
    /*--------------------------------------------------*/
    
    
    
    $('.timer').countTo();

    $('.counter-item').appear(function() {
        $('.timer').countTo();
    },{accY: -100});


});


    $(document).ready(function () {

        
              
            }
        );
