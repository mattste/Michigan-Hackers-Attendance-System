$(document).ready(function() {

	$('.button-item').click(function(e){
		e.preventDefault();
		if ($(this).hasClass('selected-item')){
			$(this).removeClass('selected-item');
		}
		else {
			$('.button-item').removeClass('selected-item');
			$(this).addClass('selected-item');
		}
		
	});
	
});
