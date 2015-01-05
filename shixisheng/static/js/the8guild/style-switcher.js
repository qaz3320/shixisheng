/*
 *Style Switcher
 *Copyright 2014 8Guild.com
*/

/*Document Ready*////////////////////////////////////////////////////////////////////////////////////////////////////////////////
jQuery(document).ready(function($) {
	'use strict';
	
	var $styleSwitcher = $('.style-switcher');
	var $switcherToggle = $('#switcher-toggle');
	var $colorsSwitcher = $('.style-switcher #color-switcher span');
	var $layoutSwitcher = $('.style-switcher #layout-switcher span');
	var $patternSwitcher = $('.style-switcher #patterns span');
	
	$switcherToggle.click(function(){
		$styleSwitcher.toggleClass('hiddenSwitcher');
	});
	
	//Color Switcher
	//////////////////////////////////////////////////////////////////////////
	$colorsSwitcher.click(function(){
		var color = $(this).attr('data-color');
		$colorsSwitcher.removeClass('current');
		$(this).addClass('current');
		$('head link.color-scheme').attr('href', 'css/colors/color-' + color + '.css');
		$('.tile-btn .inner img').each(function() {
			var $target = $(this).attr('src').split("/")[3];
      $(this).attr('src', 'img/info-tiles/' + color + '/' + $target);
    });
	});
	
	//Layout Switcher
	//////////////////////////////////////////////////////////////////////////
	$layoutSwitcher.click(function(){
		$layoutSwitcher.removeClass('current');
		$(this).addClass('current');
		if($(this).data('layout') === 'boxed') {
			$('.site-layout').addClass('boxed');
		} else {
			$('.site-layout').removeClass('boxed');
		}
	});
	
	//Pattern Switcher
	///////////////////////////////////////////////////////////////////////////
	$(document).on('click', '.style-switcher #patterns span', function(){
		if($('.site-layout').hasClass('boxed')) {
			$patternSwitcher.removeClass('current');
			$(this).addClass('current');
			var $target = $(this).data('pattern');
			$('body').attr('style', 'background-image:url(img/patterns/' + $target + '.png);');
		} else {
			alert('Please select Boxed layout!');
		}
	});

});/*Document Ready End*//////////////////////////////////////////////////////////////////////////
