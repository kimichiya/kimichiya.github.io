(function ($) {
  $(document).ready(function(){

	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.navbar').css("background-color", "black");
			} else {
				$('.navbar').css("background-color", "none");
			}
		});

	
	});

});
  });