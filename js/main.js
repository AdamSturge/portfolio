$(document).ready(function(){
	new WOW().init();

	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,      
	    singleItem:true,
	    autoPlay: 3000,
	});

	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });


});




