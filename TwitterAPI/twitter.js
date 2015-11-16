//IMPORTS
var http = require("http");
var twitter = require("twitter");
var credentials = require("./twittercredentials.js");
var fs = require("fs");
var ecstatic = require("ecstatic")({root:__dirname+'/public'});

//TWITTER INTERFACE
var mytwitter = new twitter(credentials);
var params = { q: "govrnment" };


//OUR SERVER
http.createServer(function(request, response){
    //WHEN REQUEST RECEIVED FROM CLIENT,    

    //OUR ROOT ENDPOINT
    if(request.url === "/gettweets"){


    //SEND REQUEST TO TWITTER
        // mytwitter.get("/statuses/user_timeline", params, function(error, tweets) {

        mytwitter.get("search/tweets", params, function(error, tweets) {	

        //WHEN THEY RESPOND            
        if (!error) {
                response.writeHead(200, {"Content-Type": "text/html"});

                //WRITE RESPONSE TO CLIENT
                console.log("stringify tweets", JSON.stringify(tweets));
                response.write(JSON.stringify(tweets.statuses[0].text + tweets.statuses[0].profile_image_url));
                response.end();
            }
        });

    } else {

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.end("It's working!");
    }


}).listen(8000);

console.log('Listening on port 8000');

