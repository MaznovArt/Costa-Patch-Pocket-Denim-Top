$(document).ready(function(){
	
	// product slider
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,				
		fade: true,
		asNavFor: '.slider-nav',
		responsive: [{
    		breakpoint: 739,
    			settings: {
     				dots: true,
     				autoplay:true,
     				arrows: false
     			}
  			}]
	});
	// product slider nav
	$('.slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider',
		focusOnSelect: true,
		vertical: true,
		arrows: true,
		dots: true,
		responsive: [{
    		breakpoint: 1181,
    			settings: {
     				vertical: false
     			}
  			}]
	}); 
	// product slider zoom
	$('.slider-item').zoom();
			
	// drop description and button toggle
	$('.open').click(function() {
		$(this).toggleClass('close');
		$(this).parent().find('.drop-description').slideToggle();
	});	

	// scroll to top button
	$('.scroll-to-top').click(function() {
		$('html, body').animate({ 
			scrollTop: $('.page-header').offset().top
		}, 500);
	});
});