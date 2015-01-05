$(function(){
    // Only animate elements when using non-mobile devices    
    if (jQuery.browser.mobile === false) 
    {
        $('.chart-item').one('inview', function(isInView) {
            if (isInView) {
                easyPieChart();
            }
        });

        // Animate elements in Charts Section
        $('.chart-item').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp1').css('opacity', 1);}
        });
    }
    else
    {
        easyPieChart();
    }
    
    function easyPieChart() {
        $('.chart.chart-style-one').easyPieChart({
            scaleColor: false,
            lineCap: 'butt',
            lineWidth: 10,
            size: 210,
            animate: 3000,
            easing: 'easeOutBounce',
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent) + '%');
            }
        });

        $('.chart.chart-style-two').easyPieChart({
            scaleColor: false,
            lineCap: 'butt',
            lineWidth: 3,
            size: 210,
            animate: 3000,
            easing: 'easeOutBounce',
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent) + '%');
            }
        });
    }
});