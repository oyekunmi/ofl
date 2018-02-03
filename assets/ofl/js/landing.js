
$(document).ready(function(){
    $('.bxslider, .bxslider-featured-one').bxSlider({
      pager: false
    });
    $('.bxslider2, .bxslider3').bxSlider({
      controls:false,
      auto:true,
      autoStart:true,
      autoHover:true
    });

    $('a[href="#tab-two"]').one('shown.bs.tab', function (e) {
      $('.bxslider4').bxSlider({
        controls:false,
        auto:true,
        autoStart:true,
        autoHover:true
      });
    });

    $('a[href="#tab-three"]').one('shown.bs.tab', function (e) {
      $('.bxslider5').bxSlider({
        controls:false,
        auto:true,
        autoStart:true,
        autoHover:true
        });
    });


    $('a[href="#tab-featured-two"]').one('shown.bs.tab', function (e) {
      $('.bxslider-featured-two').bxSlider({
        pager: false            
      });
    });


    $('a[href="#tab-featured-three"]').one('shown.bs.tab', function (e) {
      $('.bxslider-featured-three').bxSlider({
        pager: false            
      });
    });


});