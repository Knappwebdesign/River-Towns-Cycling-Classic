$(document).ready(function() {

$(window).scroll(function(){
   if ($(this).scrollTop() > 300) {
   $('.top-of-page-link').fadeIn();
   }
   else {
   $('.top-of-page-link').fadeOut();
   }
   });
   $('.top-of-page-link').click(function(){
   $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
   });

   // ---------------------------------------------------------------- //
	// Mobile Navigation Show/Hide
	// ---------------------------------------------------------------- //

	$('.mobilenav-click').click(function() {
		$('.mobilenav').slideToggle();
	});

});
