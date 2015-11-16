var Twitter = require ('twitter');
	
var	client = new Twitter({
		 consumer_key:'unHKasZwyrSFe7DiI4uNaNxzI',
		 consumer_secret: '5e2eke4doLz90eE1AYNKUUoKxWAnjLDzNE1R0Fe8uVvFfoTnQO',
		 access_token_key: '2533299227-dR9iPWh8mtRM4ZaAglnJxNssFJvi0oQsNZTJ0gs',
		 access_token_secret: 'EJXvLMY68Z3m9voM3id7CzZQ9SBRZHrtVcQJyC457Tmdg'
});


client.get('/search/tweets.json',
	{q:'WhatYouLookingFor'},
	function(error, params, response) {});