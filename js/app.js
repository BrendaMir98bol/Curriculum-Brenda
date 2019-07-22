  $(document).ready(function(){
  	$('.sidenav').sidenav();
  	$('.carousel.carousel-slider').carousel({
  	  fullWidth: true,
  	  indicators: true,
  	});
  	$('input#input_text, textarea#textarea2').characterCounter();
  	$('.parallax').parallax();
  	$('.collapsible').collapsible();
  	$('select').formSelect();
  	$('.datepicker').datepicker();
  	$('.timepicker').timepicker();
  });
