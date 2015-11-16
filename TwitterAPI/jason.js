var express = require('express');
var app = express();
var cool = require('cool-ascii-faces');
var Twitter = require('twitter');

var streaming;
var searchtext;
var taylor;

var client = new Twitter({
  consumer_key: '7ec4wZZdHPqxiu1ZYg2F9Fuei',
  consumer_secret: '4JXihGK1vWtltMINM9p7jzR7GMMJh44NO08d7B4lkXPUIxmBDr',
  access_token_key: '2915931141-sivWMswIiLGrMjqrsxmAEXs0XudVRokkr5IJKCs',
  access_token_secret: 'OKaqQ7AcfvLbcTfKJ3T5o4jBLL75VJD5D7DdpvZrCyVcz'
});


client.stream('statuses/filter', {track: 'taylor swift'}, function(stream) {
  stream.on('data', function(tweet) {
      // console.log(tweet.text);
    streaming = tweet.text;
  });

  stream.on('error', function(error) {
    throw error;
  });
});


var params = {screen_name: 'taylorswift13'};
client.get('statuses/user_timeline', params, function(error, usertweets, response){
  if (!error) {
    console.log(usertweets[0].text);
  taylor = usertweets[0].text;

  }
});



// function urlify(text) {
//     var urlRegex = /(https?:\/\/[^\s]+)/g;
//     return text.replace(urlRegex, function(url) {
//         return '<a href="' + url + '">' + url + '</a>';
//     })
//     // or alternatively
//     // return text.replace(urlRegex, '<a href="$1">$1</a>')
// }



// var params = {q: 'cara delevinge'};
// client.get('search/tweets', params, function(error, tweets, response){
//   if (!error) {
//     console.log(tweets.statuses[0]);
//     searchtext = tweets.statuses[0];
//   }
// });



app.set('port', (process.env.PORT || 5000));
// app.use(express.static(__dirname + '/public'));

//THIS IS REALLY UGLY
app.get('/', function(request, response) {
  response.send(
'<h1>This website sucks, please hit F5 to refresh!</h1><br>' + 
      cool() + 
          '<h4>Taylor Swift #: </h4>' + 
              streaming + 
                  '<br><h4>Latest tweet from Taylor: </h4>' + 
                      taylor

                      );
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});