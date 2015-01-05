$(function(){
    // Filter portfolio
    $(window).load(function(){
        var $container = $('.popup-portfolio'); 
        
        $container.css({visibility:'visible'});
        
        var isotopePortfolio = function(filter){
            $container.isotope({ 
                filter: filter, 
                animationOptions: { 
                    duration: 750, 
                    easing: 'linear', 
                    queue: false
                },
                masonry: {
                    isFitWidth: true,
                    isResizable: true,
                    gutter: 15
                }
            }); 
        };
        
        isotopePortfolio('*');
        
        $('.filter-portfolio a').click(function(e){ 
            e.preventDefault();
            
            $('.filter-portfolio li').removeClass('active');
            
            $('.filter-portfolio a').removeClass('disabled');
            
            $(this).parent('li').addClass('active');
            
            $(this).addClass('disabled');
            
            var selector = $(this).attr('data-filter'); 
            
            isotopePortfolio(selector);
        }); 
    });
    
    // Only animate elements when using non-mobile devices    
    if (jQuery.browser.mobile === false) 
    {
        $('.portfolio-item > .inner-content').each(function(i)
        {            
            var element = $(this),
            itemsDelay   = ( isNaN($(this).data('animation-delay')) ? 50 : $(this).data('animation-delay') );
            element.css('opacity', 0).one('inview', function(isInView) {
                if (isInView)
                {
                    setTimeout(function(){
                        element.addClass('animated fadeInUp').css('opacity', 1);
                    } , itemsDelay * i);
                }
            });
        });
    }
    
    $('.popup-portfolio').magnificPopup({
        delegate: 'a',
        type: 'image',
        fixedContentPos: false,
        gallery: {
            enabled: true,
            preload: [0,2],
            navigateByImgClick: true,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            tPrev: 'Previous (Left arrow key)',
            tNext: 'Next (Right arrow key)'
        }
    });
});