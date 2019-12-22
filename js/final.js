$(document).ready(function(){

	$(window).scrollTop(){
		if($(this).scrollTop() > 50)
			$('backToTop').fadeIn();
		} else { 
			$('backToTop').fadeOut();
		}

});
$('backToTop').click(function(){ 
	$('html,body').animate({scrollTop: 0}, 5000)
})