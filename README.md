# Nodejs basic http server.
Learning the roots of Nodejs http server. serving basic text/html/json responses. This work will be a stepping stone to learn express framework.

# Advantages of using Express.js
- Fast
- Can be used for API, microservices, blogs, realtime applications
- Supports async natively
- Can be paired with Frontend like React/Angular/Vue, making it possible to use Javascript for front **and** backend.

# Concepts

**NODEJS**

- Creating basic http server
- Sending text/html/json responses
- Setting headers/status codes
- Basic Routing

**EXPRESS.JS**

- Creating server instance
- Sending responses
- Retrieving params (http:localhost:8000/api/users/**id**/)
- Retrieving query strings (http:localhost:8000/api/users/**?name=harry&school=melbourne**)
- Hot reloading with nodemon
- Using middleware to access static files
- Using handlebars rendering template engine
- Using POST requests, to push JSON data into an existing array.

# Setup
**How to obtain this repository:**
```sh
git clone https//link.to.this.projects.git-repo
```
**Modules/dependencies:**
- `node` (runtime environment for javascript outside of browser)
- `express` (javascript web framework)
- `nodemon` (hot reloading)

# Tests
- Testing starting server, listening on localhost port 8000
- Tested getting response from several routes, each of which, providing varying responses, headers

# Contributors
- Daniel Corcoran

# Sources
