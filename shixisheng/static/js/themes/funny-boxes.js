$(function(){
    // Only animate elements when using non-mobile devices    
    if (jQuery.browser.mobile === false) 
    {
        // Animate elements in Funny Boxes
        $('.funny-box-text').each(function(i)
        {            
            var element = $(this),
            itemsDelay   = ( isNaN($(this).data('animation-delay')) ? 50 : $(this).data('animation-delay') ) ;
            element.css('opacity', 0).one('inview', function(isInView) {
                if (isInView)
                {
                    setTimeout(function(){
                        element.addClass('animated fadeInUp').css('opacity', 1);
                    } , itemsDelay * (i * 4));
                }
            });
        });
    }
});