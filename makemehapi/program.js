    var Hapi = require('hapi');
    var server = new Hapi.Server();

    server.connection({
        host: 'localhost',
        port: Number(process.argv[2] || 8080)
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply('World');
        }
    });

    server.start();
//Add a route handler similar to the following:

    function handler (request, reply) {
        reply('Hello ' + request.params);
    }
