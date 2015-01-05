$(function(){
    
    // Only animate elements when using non-mobile devices    
    if (jQuery.browser.mobile === false) 
    {
        // Animate elements in Intro Section
        $('#rj-intro > .intro-body > .intro-content').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {$(this).addClass('animated bounceIn').css('opacity', 1);}
        });
        
        
        // Animate elements in Who We Are Section
        $('#rj-who-we-are #carousel-who-we-are').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp1').css('opacity', 1);}
        });
        
        $('#rj-who-we-are .who-we-are-text').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp3').css('opacity', 1);}
        });
        
        
        // Animate elements in Quote Section
        $('#rj-quote .quote-text > .quote-icon').css('opacity', 0).one('inview', function(isInView) {
        if (isInView) {$(this).addClass('animated fadeInUp delayp1').css('opacity', 1);}
        });

        $('#rj-quote .quote-text > h2').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp3').css('opacity', 1);}
        });
        
        $('#rj-quote .quote-text > h2.quote-by').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp5').css('opacity', 1);}
        });
        
        
        // Animate elements in Keep In Touch Section
        $('#rj-keep-in-touch .social-icon-item').each(function(i)
        {            
            var element = $(this),
            itemsDelay   = ( isNaN($(this).data('animation-delay')) ? 50 : $(this).data('animation-delay') );
            element.css('opacity', 0).one('inview', function(isInView) {
                if (isInView)
                {
                    setTimeout(function(){
                        element.addClass('animated bounceIn').css('opacity', 1);
                    } , itemsDelay * (i * 2));
                }
            });
        });
        
        
        // Animate elements in Contact Us Section 
        $('#rj-contact-us .contact-us-form').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp1').css('opacity', 1);}
        });
        
        $('#rj-contact-us .social-icon-text').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp3').css('opacity', 1);}
        });
        
       
        // Animate elements in Footer
        $('#rj-footer .footer-column').each(function(i)
        {            
            var element = $(this),
            itemsDelay   = ( isNaN($(this).data('animation-delay')) ? 50 : $(this).data('animation-delay') );
            element.css('opacity', 0).one('inview', function(isInView) {
                if (isInView)
                {
                    setTimeout(function(){
                        element.addClass('animated fadeInUp').css('opacity', 1);
                    } , itemsDelay * (i * 2));
                }
            });
        });
    }
});