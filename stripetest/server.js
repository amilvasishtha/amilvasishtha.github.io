//IMPORTS / TWITTER INTERFACE
var http = require("http");
var fs = require("fs");
var url = require("url");


//OUR SERVER
http.createServer(function(request, response){

    if(request.url.match(/d3dashboard/)){
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.end("Hello world");
        }
    else if (request.url.match(/tweets/)){
        response.writeHead(200, {"Content-Type": "application/javascript"});
        response.end(JSON.stringify(tweets));
        }
    else {
          ecstatic(request, response);
        }
    }).listen(9000);

console.log ('Listening on port 9000');
