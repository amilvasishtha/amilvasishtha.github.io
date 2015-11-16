var http = require("http");

http.createServer(function(request, response){
    response.writeHead(200);
    response.write("Hello Twitter");
    response.end();
}).listen(3000);

console.log('I am listening on port 3000!');