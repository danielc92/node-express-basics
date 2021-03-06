// Load node's http server
const http = require('http');
const fs = require('fs');

let HTML = fs.readFileSync('./templates/index.html')

/* 
Create server with request and response
Writer headers and status code
Send content in end()
Listen on localhost port 3001 (port must be free)
*/
const server = http.createServer((request, response) => {
    // Set the headers
    //response.writeHead(200, { "Content-type": "text/html" })
    // Send HTML from template (index.html)
    // response.end(HTML)
    
    response.writeHead(200, {"Content-type": "application/json"})
    
    if (request.url === '/') {

        response.writeHead(200, {"Content-type": "text/html"})
        response.end(HTML)
    } else if (request.url === '/api/user') {

        response.writeHead(200, {"Content-type": "application/json"})
        const jsonResponse = JSON.stringify({
            name: "daniel",
            hobbys: ["programming", "cooking"],
            age: 99
        })
        response.end(jsonResponse)
    } else if (request.url === '/api/user/list') {

        response.writeHead(200, {"Content-type": "application/json"})
        const usersList = JSON.stringify(
            [
                {name: "Daniel", id: 1}, 
                {name: "George", id: 2}, 
                {name: "Harry", id: 3}, 
                {name: "Gary", id: 4}]
        )
        response.end(usersList)
    }
})

server.listen(8000, '127.0.0.1')