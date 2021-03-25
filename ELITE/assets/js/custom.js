window.onload=function(){
	$('.circleGraphic1').circleGraphic();
	$('.circleGraphic2').circleGraphic({'color':'blue'});
	$('.circleGraphic3').circleGraphic({'color':'green'});

	$('.circleGraphic4').circleGraphic({'color':'pink'});
}
// init Isotope
var $grid = $('.grid').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});




