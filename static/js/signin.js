$(document).ready(function() {

	$('.event-item').click(function(e){
		if ($(this).hasClass('selected-item')){
			$(this).removeClass('selected-item');
		}
		else {
			$('.selected-item').removeClass('selected-item');
			$(this).addClass('selected-item');
		}

		var str = $('.selected-item .event-title').attr('name');

		$('#submitted-event').val(str);

	});
	
});
