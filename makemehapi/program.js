    var Hapi = require('hapi');
    var server = new Hapi.Server();

    server.connection({
        host: 'localhost',
        port: Number(process.argv[2] || 8080)
    });

// Routes are added via the route function:

    server.route({path: '/', method:'GET', handler: ''});

// Handlers can be anonymous functions or separately declared (just like in javascript :P), but all of them should have this signature:

    function handler(request, reply) {

        //request has all information
        //reply handles client response

        reply({mustFlow:true});
    }

// Calling the start function gets a server listening on the assigned port:

	server.start();