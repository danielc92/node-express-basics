// Load node's http server
const http = require('http');

/* 
Create server with request and response
Writer headers and status code
Send content in end()
Listen on localhost port 3001 (port must be free)
*/
http.createServer((request, response) => {
    // set the headers
    response.writeHead(200, {"Content-type": "text/plain"})
    response.end('Hello world')	
}).listen(3001, '127.0.0.1')
