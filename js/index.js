$(document).ready(function() {

	//  create event for submit of update button
	$('form').on('submit', function(event) {

		// prevent default submit action
		event.preventDefault();
		
		// define city variable and transform to lowercase
		var city = $('#city-type').val().trim().toLowerCase();

		// check if input is empty, if so display alert
		if (!city.length) {
			alert('Please enter a city name.');
		}

		else {

			// if city match than update background
			if (city === 'new york' || city === 'new york city' || city === 'nyc') {
				$('body').attr('class', 'nyc');
			} else if (city === 'san francisco' || city === 'sf' || city === 'bay area') {
				$('body').attr('class', 'sf');
			} else if (city === 'los angeles' || city === 'la' || city === 'lax') {
				$('body').attr('class', 'la');
			} else if (city === 'austin' || city === 'atx') {
				$('body').attr('class', 'austin');
			} else if (city === 'sydney' || city === 'syd') {
				$('body').attr('class', 'sydney');
			} 

			// if no city match then display alert
			else {
				alert('No images are tagged with "' + city + '". Please try again.')
			}
		}

		// clear input field
		$('#city-type').val('');
	});
});