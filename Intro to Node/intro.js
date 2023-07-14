// Node.js is an open source server environment.

// Node.js allows you to run JavaScript on the server.

// create a server
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Shashwat');
}).listen(8080);
console.log(http);
