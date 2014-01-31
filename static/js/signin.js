$(document).ready(function() {

	$('.event-item').click(function(e){
		if ($(this).hasClass('selected-item')){
			$(this).removeClass('selected-item');
		}
		else {
			$('.selected-item').removeClass('selected-item');
			$(this).addClass('selected-item');
		}
	});

	$('.sign-in').click(function(e){
		e.preventDefault();
		// $('#submitted-event').val($(this).name);
		
	});
	
});
