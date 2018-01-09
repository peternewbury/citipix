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
				$('body').css('background-image', 'url(./images/nyc.jpg)');
			} else if (city === 'san francisco' || city === 'sf' || city === 'bay area') {
				$('body').css('background-image', 'url(./images/sf.jpg)');
			} else if (city === 'los angeles' || city === 'la' || city === 'lax') {
				$('body').css('background-image', 'url(./images/la.jpg)');
			} else if (city === 'austin' || city === 'atx') {
				$('body').css('background-image', 'url(./images/austin.jpg)');
			} else if (city === 'sydney' || city === 'syd') {
				$('body').css('background-image', 'url(./images/sydney.jpg)');
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