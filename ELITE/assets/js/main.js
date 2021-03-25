$(document).ready(function(){
   $(".main-slider").owlCarousel({
    items:1,
    loop: true,
    dots:true,
   
   
  });


	   // init Isotope
	var $grid = $('.grid').isotope({
	  // options
	});
	// filter items on button click
	$('.filter-button-group').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});

	

	/* magnificPopup */
	$('.image-link').magnificPopup({
	  type:'image',
	  gallery:{
	    enabled:true
	  },

	});




	 $(".another-slider").owlCarousel({
	    items:1,
	    loop: true,
	    dots: true,
	    nav: true,
	    navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"]
  });












	$('.counter').countTo();


 
   

});