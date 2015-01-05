$(function(){
    // Only animate elements when using non-mobile devices    
    if (jQuery.browser.mobile === false) 
    {
        $('.counter-item > i').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp1').css('opacity', 1);}
        });
        
        $('.counter-item > .inner-content').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp3').css('opacity', 1);}
        });
        
        $('.counter-item > p').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp5').css('opacity', 1);}
        });
        
        $('.counter-item').one('inview', function(isInView) {
            if (isInView) {
                $('.inner-content > .number').countTo();
            }
        });
    }
    else
    {
        $('.inner-content > .number').countTo();
    }
});