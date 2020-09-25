'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
    res.end('Hello World Again\n');
    res.end('Hello World Again and Again\n');
}).listen(port);
