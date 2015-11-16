var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: config.conKey,
  consumer_secret: config.conSec,
  access_token_key: config.accTokKey,
  access_token_secret: config.accTokSec
});



client.stream('statuses/filter', {track: 'founders'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
  });
 
  stream.on('error', function(error) {
    throw error;
  });
});