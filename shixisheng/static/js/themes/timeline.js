$(function(){
    // Timeline tooltip
    $('.timeline .timeline-badge').tooltip();
    
    // Only animate elements when using non-mobile devices    
    if (jQuery.browser.mobile === false) 
    {
        $('ul.timeline > li > .timeline-panel').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {$(this).addClass('animated fadeInLeft').css('opacity', 1);}
        });

        $('ul.timeline > li.timeline-inverted > .timeline-panel').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {$(this).addClass('animated fadeInRight').css('opacity', 1);}
        });
    }
});