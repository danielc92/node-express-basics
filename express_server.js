const express = require('express');
const fs = require('fs');
const app = express();
const HTML = fs.readFileSync('./templates/index.html');


// How to send html response
app.get('/', (request, response) => {
    response.send('<h1>Hello world</h1>');
})

// How to send json response
app.get('/api/user', (request, response)=>{
    response.send({
       name: 'George',
       food: 'Donut',
       location: 'Melbourne'
    })
})

// How to retrieve params and query strings
app.get('/api/user/:id', (request, response) => {
    let id = request.params.id;
    let category = request.query.category;

    response.send({
        category: category,
        id: id
    })

})


app.listen(8000)